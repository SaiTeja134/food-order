// import { Component, EventEmitter, Input, Output, SimpleChanges, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AdminflowserviceService } from '../../../Services/adminflowservice.service';
// import { UsersService } from '../../../Services/users.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-order-billing',
//   standalone: false,
//   templateUrl: './order-billing.component.html',
//   styleUrls: ['./order-billing.component.css']
// })
// export class OrderBillingComponent implements OnInit {
//   constructor(
//     private router: Router,
//     private service: UsersService,
//     private adminService: AdminflowserviceService,
//   ) { }

//   showCount: boolean = false;
//   showpaynow: string = 'proceed';
//   serviceCharge: number = 50;
//   menuItem: any[] = [];
//   newobj: any;
//   TableNumber: number | null = null;
  
//   @Input() KartItems: any[] = [];
//   @Input() addTotal: number = 0;
//   @Input() billingHeading: string = 'Order Preview';
  
//   @Output() deleteitem = new EventEmitter<{index: number, item: any}>();
//   @Output() addItem = new EventEmitter<{index: number, item: any}>();
//   @Output() minusItem = new EventEmitter<{index: number, item: any}>();

//   get tokenFlag(): boolean {
//     return !!localStorage.getItem('email');
//   }

//   ngOnInit(): void {
//     this.adminService.gettableNo().subscribe(res => {
//       const tableNumber = localStorage.getItem('tableNumber');
//       this.TableNumber = tableNumber ? parseInt(tableNumber) : null;
//     });
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     // Handle input changes if needed
//   }

//   Proceed(): void {
//     if (this.tokenFlag) {
//       this.menuItem = this.KartItems.map(val => val._id);
      
//       const formdata = {
//         menuItems: this.menuItem,
//         customerId: localStorage.getItem("_id"),
//         description: "new order",
//         totalPrice: this.addTotal + this.serviceCharge,
//         customerName: localStorage.getItem("name")
//       };
//       this.showpaynow = 'Place Order';
//       this.showCount = true;
//       this.billingHeading = 'Your Orders';
//     }
//   }

//   paynow(): void {
//     if (!this.tokenFlag) return;

//     this.menuItem = this.KartItems.map(val => ({
//       _id: val._id,
//       name: val.name,
//       type: val.type,
//       description: val.description,
//       price: val.price,
//     }));

//     const formdata = {
//       menuItems: this.menuItem,
//       customerId: localStorage.getItem("_id"),
//       description: "new order",
//       totalPrice: this.addTotal + this.serviceCharge,
//       tableNo: this.TableNumber,
//       status: "placed"
//     };
//     this.service.placeOrder(formdata).subscribe({
//       next: (res) => {
//         this.router.navigate(['/user/paymentgateway'], {
//           queryParams: {
//             totalPrice: this.addTotal,
//             serviceCharge: this.serviceCharge
//           },
//         });
//       },
//       error: (err) => {
//         console.error('Order placement error:', err);
//         // Handle error appropriately
//       }
//     });
//   }

//   minus(index: number, item: any): void {
//     this.minusItem.emit({index, item});
//   }

//   plus(index: number, item: any): void {
//     this.addItem.emit({index, item});
//   }

//   delete(index: number, item: any): void {
//     this.deleteitem.emit({index, item});
//   }
// }

import { Component, EventEmitter, Input, Output, SimpleChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminflowserviceService } from '../../../Services/adminflowservice.service';
import { UsersService } from '../../../Services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-billing',
  standalone: false,
  templateUrl: './order-billing.component.html',
  styleUrls: ['./order-billing.component.css']
})
export class OrderBillingComponent implements OnInit {
  constructor(
    private router: Router,
    private service: UsersService,
    private adminService: AdminflowserviceService,
    private toastr: ToastrService
  ) { }

  showCount: boolean = false;
  showpaynow: string = 'proceed';
  serviceCharge: number = 50;
  menuItem: any[] = [];
  TableNumber: number | null = null;
  orderData: any; // To store order data before payment
  
  @Input() KartItems: any[] = [];
  @Input() addTotal: number = 0;
  @Input() billingHeading: string = 'Order Preview';
  
  @Output() deleteitem = new EventEmitter<{index: number, item: any}>();
  @Output() addItem = new EventEmitter<{index: number, item: any}>();
  @Output() minusItem = new EventEmitter<{index: number, item: any}>();

  get tokenFlag(): boolean {
    return !!localStorage.getItem('email');
  }

  ngOnInit(): void {
    this.adminService.gettableNo().subscribe(res => {
      const tableNumber = localStorage.getItem('tableNumber');
      this.TableNumber = tableNumber ? parseInt(tableNumber) : null;
    });
  }

  Proceed(): void {
    if (this.tokenFlag) {
      this.showpaynow = 'Place Order';
      this.showCount = true;
      this.billingHeading = 'Your Orders';
    }
  }

  prepareOrderData(): any {
    return {
      menuItems: this.KartItems.map(val => ({
        _id: val._id,
        name: val.name,
        type: val.type,
        description: val.description,
        price: val.price,
        quantity: val.quantity
      })),
      customerId: localStorage.getItem("_id"),
      description: "new order",
      totalPrice: this.addTotal + this.serviceCharge,
      tableNo: this.TableNumber,
      status: "pending" // Will change to "confirmed" after payment
    };
  }

  paynow(): void {
    if (!this.tokenFlag) {
      this.toastr.error('Please login to place order');
      return;
    }

    if (this.KartItems.length === 0) {
      this.toastr.error('Your cart is empty');
      return;
    }

    // Prepare order data and store temporarily
    this.orderData = this.prepareOrderData();
    
    // Navigate to payment with order details
    this.router.navigate(['/user/paymentgateway'], {
      queryParams: {
        totalPrice: this.addTotal,
        serviceCharge: this.serviceCharge,
        orderData: JSON.stringify(this.orderData) // Pass order data to payment
      },
    });
  }

  minus(index: number, item: any): void {
    this.minusItem.emit({index, item});
  }

  plus(index: number, item: any): void {
    this.addItem.emit({index, item});
  }

  delete(index: number, item: any): void {
    this.deleteitem.emit({index, item});
  }
}