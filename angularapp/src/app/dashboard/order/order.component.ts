import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../Services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  food = ['Corn Bhel', 'Dill Leaves Pakoda '];
  itemCount = 0;
  allMenuList: any[] = [];
  starterVeg: any[] = [];
  starterNonVeg: any[] = [];
  mainCourseVeg: any[] = [];
  mainCourseNonVeg: any[] = [];
  DesertsVeg: any[] = [];
  BreverageVeg: any[] = [];
  errorMsg: string | null = null;
  desertCount = 0;
  orderItemHeading = "Order Preview";
  DesertVegForm: FormGroup;
  starterVegForm: FormGroup;
  mainCourseVegForm: FormGroup;
  mainCourseNonVegForm!: FormGroup;
  brevegrageForm: FormGroup;
  isSelected: boolean = true;
  isSelectedVeg: boolean = true;
  KartItems: any[] = [];
  add = 0;
  addTotal = 0;
  newtotal: number[] = [];

  constructor(
    private service: UsersService, 
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.DesertVegForm = this.fb.group({
      items: this.fb.array([]),
    });
    this.starterVegForm = this.fb.group({
      items: this.fb.array([]),
      itemNonveg: this.fb.array([]),
    });
    this.mainCourseVegForm = this.fb.group({
      items: this.fb.array([]),
      itemNonveg: this.fb.array([]),
    });
    this.brevegrageForm = this.fb.group({
      items: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.service.getAllMenu().subscribe((res: any) => {
      if (!res.error) {
        this.allMenuList = res.data;
        this.errorMsg = null;
        
        this.allMenuList.forEach((item: any) => {
          if (item['category'] === 'starter' && item['status'] === 'available') {
            if (item['subCategory'] && item['subCategory'] === 'veg') {
              this.starterVeg.push(item);
              (this.starterVegForm.get('items') as FormArray).push(this.initialStarter());
            } else {
              this.starterNonVeg.push(item);
              (this.starterVegForm.get('itemNonveg') as FormArray).push(this.initialStarter());
            }
          } else if (item['category'] === 'main course' && item['status'] === 'available') {
            if (item['subCategory'] && item['subCategory'] === 'veg') {
              this.mainCourseVeg.push(item);
              (this.mainCourseVegForm.get('items') as FormArray).push(this.initialMainCourse());
            } else {
              this.mainCourseNonVeg.push(item);
              (this.mainCourseVegForm.get('itemNonveg') as FormArray).push(this.initialMainCourse());
            }
          } else if (item['category'] === 'desserts' && item['status'] === 'available') {
            this.DesertsVeg.push(item);
            (this.DesertVegForm.get('items') as FormArray).push(this.initialDeserts());
          } else if (item['category'] === 'breverage' && item['status'] === 'available') {
            this.BreverageVeg.push(item);
            (this.brevegrageForm.get('items') as FormArray).push(this.initialBrevegrage());
          }
        });
      } else {
        this.allMenuList = [];
        this.errorMsg = 'Error!!!';
      }
    });
  }

  initialDeserts(): FormGroup {
    return this.fb.group({
      foodCount: [0],
    });
  }

  get item(): FormArray {
    return this.DesertVegForm.get('items') as FormArray;
  }

  initialStarter(): FormGroup {
    return this.fb.group({
      foodCount: [0],
    });
  }

  get itemStarter(): FormArray {
    return this.starterVegForm.get('items') as FormArray;
  }

  get itemNonVegStarter(): FormArray {
    return this.starterVegForm.get('itemNonveg') as FormArray;
  }

  initialMainCourse(): FormGroup {
    return this.fb.group({
      foodCount: [0],
    });
  }

  get itemMainCourse(): FormArray {
    return this.mainCourseVegForm.get('items') as FormArray;
  }

  get itemMainCourseNonVeg(): FormArray {
    return this.mainCourseVegForm.get('itemNonveg') as FormArray;
  }

  initialBrevegrage(): FormGroup {
    return this.fb.group({
      foodCount: [0],
    });
  }

  get itemBrevegrage(): FormArray {
    return this.brevegrageForm.get('items') as FormArray;
  }

  handleItemAdd(type: string, index: number, item: any) {
    if (localStorage.getItem('email')) {
      let formGroup: FormArray | undefined;
      
      if (type.includes('desert')) {
        formGroup = this.item;
      } else if (type == 'starter-veg') {
        formGroup = this.itemStarter;
      } else if (type == 'starter-nonveg') {
        formGroup = this.itemNonVegStarter;
      } else if (type == 'main-veg') {
        formGroup = this.itemMainCourse;
      } else if (type == 'main-nonveg') {
        formGroup = this.itemMainCourseNonVeg;
      } else if (type.includes('breverage')) {
        formGroup = this.itemBrevegrage;
      }

      if (formGroup && formGroup.controls[index]) {
        const currentValue = formGroup.controls[index].get('foodCount')?.value || 0;
        formGroup.controls[index].get('foodCount')?.patchValue(currentValue + 1);
      }

      const cartItem = this.KartItems.find((c) => c['_id'] === item['_id']);
      if (cartItem) {
        cartItem.count++;
        cartItem.index = index;
      } else {
        this.KartItems.push({ ...item, count: 1, index: index });
      }
      
      this.calculateTotal();
    } else {
      this.toastr.warning("Please Login");
    }
  }

  handleItemMinus(type: string, index: number, item: any) {
    if (localStorage.getItem('email')) {
      let formGroup: FormArray | undefined;
      
      if (type.includes('desert')) {
        formGroup = this.item;
      } else if (type == 'starter-veg') {
        formGroup = this.itemStarter;
      } else if (type == 'starter-nonveg') {
        formGroup = this.itemNonVegStarter;
      } else if (type == 'main-veg') {
        formGroup = this.itemMainCourse;
      } else if (type == 'main-nonveg') {
        formGroup = this.itemMainCourseNonVeg;
      } else if (type.includes('breverage')) {
        formGroup = this.itemBrevegrage;
      }

      if (formGroup && formGroup.controls[index]) {
        const currentValue = formGroup.controls[index].get('foodCount')?.value || 0;
        formGroup.controls[index].get('foodCount')?.patchValue(
          currentValue === 0 ? 0 : currentValue - 1
        );
      }

      const cartItemIndex = this.KartItems.findIndex((c) => c['_id'] === item['_id']);
      if (cartItemIndex !== -1) {
        const cartItem = this.KartItems[cartItemIndex];
        if (cartItem.count > 1) {
          cartItem.count--;
        } else {
          this.KartItems.splice(cartItemIndex, 1);
        }
      }
      
      this.calculateTotal();
    } else {
      this.toastr.warning("Please Login");
    }
  }

  private calculateTotal(): void {
    this.newtotal = this.KartItems.map((res) => res.price * res.count);
    this.addTotal = this.newtotal.reduce((sum, current) => sum + current, 0);
  }

  handleSubCategory(type: string, category: string) {
    if (category == 'starter') {
      this.isSelectedVeg = type == 'veg';
    } else if (category == 'main') {
      this.isSelected = type == 'veg';
    }
  }

  deleteitem(event: any) {
    this.KartItems.forEach((element, i) => {
      const type = event.item.subCategory 
        ? event.item.category === 'main course' 
          ? 'main-' + event.item.subCategory 
          : event.item.category + '-' + event.item.subCategory 
        : event.item.category;
      
      const index = event.item.index;
      
      if (i == event.index) {
        this.KartItems.splice(i, 1);
      }

      if (element._id === event.item._id) {
        let formArray: FormArray | undefined;
        
        if (type.includes('desert')) {
          formArray = this.item;
        } else if (type == 'starter-veg') {
          formArray = this.itemStarter;
        } else if (type == 'starter-nonveg') {
          formArray = this.itemNonVegStarter;
        } else if (type == 'main-veg') {
          formArray = this.itemMainCourse;
        } else if (type == 'main-nonveg') {
          formArray = this.itemMainCourseNonVeg;
        } else if (type.includes('breverage')) {
          formArray = this.itemBrevegrage;
        }

        if (formArray && formArray.controls[index]) {
          formArray.controls[index].get('foodCount')?.patchValue(0);
        }
      }
    });
    
    this.calculateTotal();
  }

  Additem(event: any) {
    const maincourse = event.item.category.includes('main') 
      ? 'main' 
      : event.item.category.includes('deserts') 
        ? 'desert' 
        : event.item.category.includes('breverage') 
          ? 'breverage' 
          : event.item.category;
    
    this.handleItemAdd(
      maincourse + '-' + event.item.subCategory,
      event.item.index,
      event.item
    );
  }

  minusitem(event: any) {
    const maincourse = event.item.category.includes('main') 
      ? 'main' 
      : event.item.category.includes('deserts') 
        ? 'desert' 
        : event.item.category.includes('breverage') 
          ? 'breverage' 
          : event.item.category;
    
    this.handleItemMinus(
      maincourse + '-' + event.item.subCategory,
      event.item.index,
      event.item
    );
  }

  itemStarters() {
    return this.itemStarter.value;
  }

  checkLength(controlName: string) {
    return (formGroup: FormGroup) => {
      if (!formGroup.parent) {
        return null;
      }
      const otpLength = formGroup.parent.get(controlName);
      
      if (otpLength?.value?.length) {
        otpLength.setErrors({ length: true });
      } else {
        otpLength?.setErrors({ length: false });
      }
      return null;
    };
  }
}