import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

@Component({
  selector: 'app-select-table',
  standalone: false,
  templateUrl: './select-table.component.html',
  styleUrl: './select-table.component.css'
})
export class SelectTableComponent implements OnInit {
  tables: {
    capacity2: any[];
    capacity4: any[];
    capacity6: any[];
  } = { capacity2: [], capacity4: [], capacity6: [] };
  
  selectedTable: any = null;
  isLoading: boolean = false;
  bookingForm: FormGroup;

  constructor(
    private adminService: AdminflowserviceService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router:Router
  ) {
    this.bookingForm = this.fb.group({
      bookingDate: ['', Validators.required],
      bookingTime: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTables();
  }

  loadTables(): void {
    this.isLoading = true;
    this.adminService.getAllTables().subscribe({
      next: (res) => {
        if (res.success) {
          this.tables = res.data;
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error('Failed to load tables');
        this.isLoading = false;
      }
    });
  }

  getTableImage(table: any): string {
    if (!table.isAvailable || table.booked) {
      switch(table.capacity) {
        case 2: return '/assets/2sb.png';
        case 4: return '/assets/4sb.png';
        case 6: return '/assets/6sb.png';
        default: return '';
      }
    } else if (table.isSelected) {
      switch(table.capacity) {
        case 2: return '/assets/2ss.png';
        case 4: return '/assets/4ss.png';
        case 6: return '/assets/6ss.png';
        default: return '';
      }
    } else {
      switch(table.capacity) {
        case 2: return '/assets/2sa.png';
        case 4: return '/assets/4sa.png';
        case 6: return '/assets/6sa.png';
        default: return '';
      }
    }
  }

  toggleTableSelection(table: any): void {
    if (table.isAvailable && !table.booked) {
      Object.values(this.tables).forEach(capacityGroup => {
        capacityGroup.forEach(t => t.isSelected = false);
      });
      
      table.isSelected = true;
      this.selectedTable = table;
      this.bookingForm.reset(); // Reset form when selecting new table
    }
  }

  confirmBooking(): void {
    if (!this.selectedTable) {
      this.toastr.error('Please select a table first');
      return;
    }

    if (this.bookingForm.invalid) {
      this.toastr.error('Please fill all required fields');
      return;
    }

    this.isLoading = true;
    
  
    const bookingDate = this.bookingForm.controls['bookingDate'].value;
    const bookingTime = this.bookingForm.controls['bookingTime'].value;
    const bookingData = {
      ...this.bookingForm.value,
      _id:this.selectedTable._id,
      booked:true,
      isAvailable:false,
      bookingDate,
      bookingTime
    }
    console.log(bookingData);
    localStorage.setItem('bookingData',JSON.stringify(bookingData));
    localStorage.setItem('selectedTableId',this.selectedTable._id);
    localStorage.setItem('tableNumber',this.selectedTable.tableNo)
    this.bookingForm.reset();
    this.selectedTable = null;
    this.router.navigate(['/user/order']);
  }
}
