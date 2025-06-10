import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

interface Table {
  _id: string;
  tableNo: number;
  capacity: number;
  isAvailable: boolean;
  alloted: boolean;
  served: boolean;
  booked: boolean;
}

interface TableResponse {
  error: boolean;
  message: string;
  data: {
    capacity2?: Table[];
    capacity4?: Table[];
    capacity6?: Table[];
  };
}

interface AddTableResponse {
  success: boolean;
  data: Table;
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  standalone: false
})
export class TablesComponent {
  tableForm: FormGroup;
  addTabForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AdminflowserviceService,
    private toastr: ToastrService
  ) {
    this.tableForm = this.fb.group({
      table: this.fb.array([]),
    });
    
    this.addTabForm = this.fb.group({
      tableNo: [0, [Validators.required, Validators.min(1)]],
      capacity: [2, [Validators.required, Validators.min(1)]]
    });

    this.getTableLists();
  }

  get tables(): FormArray {
    return this.tableForm.get('table') as FormArray;
  }

  initialTable(): FormGroup {
    return this.fb.group({
      tableNo: [0, Validators.required],
      capacity: [2, Validators.required],
      isAvailable: [false],
      alloted: [false],
      served: [false],
      booked: [false],
      id: ['']
    });
  }

  combineAllTables(responseData: TableResponse['data']): Table[] {
    const allTables: Table[] = [];
    if (responseData.capacity2?.length) {
      allTables.push(...responseData.capacity2);
    }
    if (responseData.capacity4?.length) {
      allTables.push(...responseData.capacity4);
    }
    if (responseData.capacity6?.length) {
      allTables.push(...responseData.capacity6);
    }
    return allTables.sort((a, b) => a.tableNo - b.tableNo);
  }

  handleAddTable(): void {
    if (this.addTabForm.invalid) {
      this.toastr.error('Please fill all required fields correctly');
      return;
    }

    const tableNo = this.addTabForm.get('tableNo')?.value;
    const capacity = +this.addTabForm.get('capacity')?.value;

    const tableData = {
      tableNo: tableNo,
      capacity: capacity,
      isAvailable: true,
      alloted: false,
      served: false,
      booked: false
    };
    console.log(tableData);
    this.service.addTable(tableData).subscribe({
      next: (res: AddTableResponse) => {
        if (res.success) {
          this.toastr.success('Table added successfully');
          this.getTableLists();
          this.addTabForm.reset({ tableNo: 0, capacity: 2 });
        } else {
          this.toastr.error('Failed to add table');
        }
      },
      error: (err) => {
        this.toastr.error(err.error?.detail || 'Failed to add table');
      }
    });
  }

  getTableLists(): void {
    this.service.selectTable().subscribe({
      next: (res: TableResponse) => {
        if (!res.error) {
          const allTables = this.combineAllTables(res.data);
          this.tables.clear();
          
          allTables.forEach(table => {
            this.tables.push(
              this.fb.group({
                tableNo: [table.tableNo, Validators.required],
                capacity: [table.capacity, Validators.required],
                isAvailable: [table.isAvailable],
                alloted: [table.alloted],
                booked: [table.booked],
                served: [table.served],
                id: [table._id]
              })
            );
          });
        } else {
          this.toastr.error(res.message);
        }
      },
      error: (err) => {
        this.toastr.error(err.error?.detail || 'Failed to load tables');
      }
    });
  }

  editTables(index: number): void {
    const tableGroup = this.tables.at(index) as FormGroup;
    
    const data = {
      _id: tableGroup.get('id')?.value,
      tableNo: tableGroup.get('tableNo')?.value,
      capacity: tableGroup.get('capacity')?.value,
      isAvailable: tableGroup.get('isAvailable')?.value,
      alloted: tableGroup.get('alloted')?.value,
      booked: tableGroup.get('booked')?.value,
      served: tableGroup.get('served')?.value
    };

    this.service.editTable(data).subscribe({
      next: (res) => {
        if (!res.error) {
          this.toastr.success(res.message);
          this.getTableLists();
        } else {
          this.toastr.error(res.message);
        }
      },
      error: (err) => {
        this.toastr.error(err.error?.detail || 'Failed to update table');
      }
    });
  }
}