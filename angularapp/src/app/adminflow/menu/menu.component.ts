import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: false
})
export class MenuComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'status'];
  dataSource: any[] = [];
  tableitem: any[] = [];
  error: string | null = null;
  addMenuForm!: FormGroup;
  imageList: any[] = [];
  sumbit: boolean = false;
  imageSlected: boolean = false;
  sortedColumn: string = '';
  sortOrder: string = 'asc';
  maxPageButtons: number = 3;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  itemsPerPageOptions: number[] = [5, 10, 20];

  foodImg = [
    { id: 1, path: 'assets/chickenbiryani.jpg', selected: false },
    { id: 2, path: 'assets/virgin-mojito.webp', selected: false },
    { id: 3, path: 'assets/Paneer-Butter-Masala.jpg', selected: false },
    { id: 4, path: 'assets/mutton_curry.jpg', selected: false },
    { id: 5, path: 'assets/kalakand.avif', selected: false }
  ];

  @ViewChild('tableContainer') tableContainer!: ElementRef;
  @ViewChild('myModal') modal!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(
    private service: UsersService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.getMenuList();
    this.initializeForm();
  }

  initializeForm(): void {
    const formControls: { [key: string]: FormControl } = {};
    
    this.foodImg.forEach((item) => {
      formControls[item.id.toString()] = new FormControl(item.path === '../../../../assets/NoPath - Copy (2)@2x.png');
      item.selected = false;
    });

    this.addMenuForm = this.fb.group({
      item_name: ['', [Validators.required]],
      item_category: ['', Validators.required],
      sub_category: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      selectedImages: [[], this.validateSelectedImages()],
      ...formControls
    });
  }

  getMenuList(): void {
    this.service.getAllMenu().subscribe({
      next: (res) => {
        if (!res.error) {
          this.tableitem = res.data;
          this.dataSource = res.data.map((ele: any) => {
            ele.isSelected = ele.status === 'available';
            return ele;
          });
          this.error = null;
        } else {
          this.error = "No Data Found";
        }
      },
      error: (err) => {
        this.toastr.error(err.error.detail);
      }
    });
  }

  handleAvailablity(row: any): void {
    row.isSelected = !row.isSelected;
    const data = {
      name: row.name,
      category: row.category,
      status: row.isSelected ? 'available' : 'unavailable',
      price: row.price
    };
    
    // Uncomment when service is ready
    // this.service.editMenu(data, row._id).subscribe({
    //   next: (res) => {
    //     if (!res.error) {
    //       this.toastr.success(res.message);
    //       this.getMenuList();
    //     } else {
    //       this.toastr.error(res.message);
    //     }
    //   },
    //   error: (err) => {
    //     this.toastr.error(err.error.detail);
    //   }
    // });
  }

  validateSelectedImages(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedImages = control.value;
      if (!selectedImages || selectedImages.length === 0) {
        return { noImagesSelected: true };
      }
      return null;
    };
  }

  selectItem(item: any): void {
    item.selected = !item.selected;

    this.foodImg.forEach((img) => {
      this.addMenuForm.get(img.id.toString())?.setValue(img === item ? img.path : false);
    });

    const selectedImages = this.foodImg
      .filter(img => img.selected)
      .map(img => img.path);
      
    this.addMenuForm.get('selectedImages')?.setValue(selectedImages);

    if (selectedImages.length > 0) {
      this.addMenuForm.get('selectedImages')?.setErrors(null);
    } else {
      this.addMenuForm.get('selectedImages')?.setErrors({ noImagesSelected: true });
    }
  }

  closeModal(): void {
    if (this.modal) {
      this.modal.nativeElement.style.display = 'none';
      this.renderer.removeClass(this.modal.nativeElement, 'show');
    }
  }

  handleItemAdd(): void {
    this.sumbit = true;
    
    if (this.addMenuForm.valid) {
      const item: any = {
        name: this.addMenuForm.get('item_name')?.value,
        category: this.addMenuForm.get('item_category')?.value,
        subCategory: this.addMenuForm.get('sub_category')?.value,
        status: "available",
        description: this.addMenuForm.get('description')?.value,
        price: this.addMenuForm.get('price')?.value
      };

      for (let i = 1; i <= 5; i++) {
        const controlValue = this.addMenuForm.get(i.toString())?.value;
        if (controlValue && controlValue !== true && controlValue !== false) {
          item.imgPath = controlValue;
          break;
        }
      }

      this.service.addMenu(item).subscribe({
        next: (res: any) => {
          if (!res.error) {
            this.toastr.success(res.message);
            this.getMenuList();
            this.closeModal();
          } else {
            this.toastr.error(res.message);
          }
        },
        error: (err) => {
          this.toastr.error(err.message);
        }
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource = this.tableitem.filter((item: any) => 
      item.name.toLowerCase().includes(filterValue) ||
      item.category.toLowerCase().includes(filterValue) ||
      item.price.toString().includes(filterValue)
    );
  }

  sortBy(column: string): void {
    if (this.sortedColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortOrder = 'asc';
    }
  }

  get totalPages(): number {
    return Math.ceil(this.tableitem.length / this.itemsPerPage);
  }

  setPage(page: number): void {
    this.currentPage = page;
  }

  setItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
  }

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  getCurrentPageDataSorted(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    let currentPageData = this.tableitem.slice(startIndex, endIndex);

    if (this.sortedColumn) {
      currentPageData = [...currentPageData].sort((a, b) => {
        const aValue = a[this.sortedColumn]?.toString().toLowerCase() || '';
        const bValue = b[this.sortedColumn]?.toString().toLowerCase() || '';
        
        return this.sortOrder === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      });
    }

    return currentPageData;
  }

  getPageButtons(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPageButtons = this.maxPageButtons;
    const halfButtons = Math.floor(maxPageButtons / 2);

    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage <= halfButtons) {
      return Array.from({ length: maxPageButtons }, (_, i) => i + 1);
    } else if (currentPage >= totalPages - halfButtons) {
      return Array.from({ length: maxPageButtons }, (_, i) => totalPages - maxPageButtons + i + 1);
    } else {
      return Array.from({ length: maxPageButtons }, (_, i) => currentPage - halfButtons + i);
    }
  }
}