import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-payment-gateway',
  standalone: false,
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent implements OnInit {
  @ViewChild('feedbackModal') feedbackModal: any;

  // Payment related properties
  paymentMode = 'Credit Card';
  totalPrice: number = 0;
  serviceCharge: number = 0;
  totalPay: number = 0;
  discountCode: string = '';
  discountApplied: boolean = false;
  discountError: string = '';
  
  // Forms
  creditCardForm!: FormGroup;
  upiForm!: FormGroup;
  cashForm!: FormGroup;
  walletForm!: FormGroup;
  
  // Rating related properties
  description: string = '';
  userRating: number = 0;
  
  // Order and booking data
  orderData: any;
  bookingData: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private adminService: AdminflowserviceService, 
    private service: UsersService, 
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.initializeForms();
  }

  ngOnInit(): void {
    this.loadBookingData();
    this.loadOrderDataFromParams();
  }

  private initializeForms(): void {
    // Credit Card Form
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/), this.expiryDateValidator()]],
      cardHolderName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]]
    });

    // UPI Form
    this.upiForm = this.fb.group({
      upiId: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/)]],
      upiApp: ['']
    });

    // Cash Form
    this.cashForm = this.fb.group({
      confirmationCode: ['']
    });

    // E-Wallet Form
    this.walletForm = this.fb.group({
      walletProvider: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      mpin: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]]
    });
  }

  private expiryDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }

      const [month, year] = control.value.split('/');
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;

      if (+year < currentYear || (+year === currentYear && +month < currentMonth)) {
        return { expiryDateInvalid: true };
      }

      return null;
    };
  }

  private loadBookingData(): void {
    try {
      const bookingDataString = localStorage.getItem('bookingData');
      this.bookingData = bookingDataString ? JSON.parse(bookingDataString) : null;
    } catch (e) {
      console.error('Error parsing booking data:', e);
      this.bookingData = null;
    }
  }

  private loadOrderDataFromParams(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.totalPrice = Number(params.totalPrice) || 0;
      this.serviceCharge = Number(params.serviceCharge) || 0;
      this.totalPay = this.totalPrice + this.serviceCharge;
      
      try {
        this.orderData = params.orderData ? JSON.parse(params.orderData) : null;
      } catch (e) {
        console.error('Error parsing order data:', e);
        this.orderData = null;
        this.toastr.error('Invalid order data');
        this.router.navigate(['/user/menu']);
      }
    });
  }

  // Formatting functions
  formatCardNumber(event: any): void {
    let value = event.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (value.length > 16) {
      value = value.substr(0, 16);
    }
    
    // Add space every 4 characters
    const formattedValue = value.replace(/(\d{4})/g, '$1 ').trim();
    this.creditCardForm.get('cardNumber')?.setValue(formattedValue, { emitEvent: false });
  }

  formatExpiryDate(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.substr(0, 2) + '/' + value.substr(2, 2);
    }
    this.creditCardForm.get('expiryDate')?.setValue(value, { emitEvent: false });
  }

  // Payment mode selection
  setPaymentMode(mode: string): void {
    this.paymentMode = mode;
  }

  // UPI app selection
  selectUpiApp(app: string): void {
    this.upiForm.patchValue({ upiApp: app });
    this.toastr.info(`${app.charAt(0).toUpperCase() + app.slice(1)} selected`);
  }

  // Discount application
  applyDiscount(): void {
    if (!this.discountCode) {
      this.discountError = 'Please enter a discount code';
      return;
    }

    // Simulate discount validation
    if (!this.discountApplied && this.discountCode.toLowerCase() === 'save10') {
      const discountAmount = this.totalPrice * 0.1; // 10% discount
      this.totalPrice = this.totalPrice - discountAmount;
      this.totalPay = this.totalPrice + this.serviceCharge;
      this.discountApplied = true;
      this.discountError = '';
      this.toastr.success(`Discount of ₹${discountAmount.toFixed(2)} applied!`);
    } else {
      this.discountError = this.discountApplied? 'Discount Already applied' : 'Invalid discount code';
      this.discountApplied = false;
    }
  }

  // Form validation and submission
  validateAndProceed(): void {
    let formValid = false;

    switch (this.paymentMode) {
      case 'Credit Card':
        this.creditCardForm.markAllAsTouched();
        formValid = this.creditCardForm.valid;
        break;
      case 'UPI':
        this.upiForm.markAllAsTouched();
        formValid = this.upiForm.valid;
        break;
      case 'Cash':
        formValid = true; // No validation needed for cash
        break;
      case 'E-Wallet':
        this.walletForm.markAllAsTouched();
        formValid = this.walletForm.valid;
        break;
    }

  }

  // Rating handling
  onRatingUpdated(newRating: number): void {
    this.userRating = newRating;
  }

  // Final submission
  onSubmit(): void {
    if (!this.validateOrderData()) return;

    const paymentData = this.createPaymentData();

    this.processPayment(paymentData);
  }

  private validateOrderData(): boolean {
    if (!this.orderData) {
      this.toastr.error('Order data is missing');
      return false;
    }

    if (!localStorage.getItem('_id')) {
      this.toastr.error('User session expired');
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }

  private createPaymentData(): any {
    const baseData = {
      paymentMode: this.paymentMode,
      customerId: localStorage.getItem("_id"), 
      email: localStorage.getItem('email'),
      name: localStorage.getItem("name"),
      paymentDesc: `Payment for order (Table ${this.orderData.tableNo})`,
      totalPrice: this.totalPay,
      phNo: localStorage.getItem("phNo"),
      status: "successful",
      orderReference: this.orderData.menuItems.map((item: any) => item.name).join(', '),
      discountApplied: this.discountApplied,
      discountCode: this.discountCode
    };

    // Add payment method specific data
    switch (this.paymentMode) {
      case 'Credit Card':
        return {
          ...baseData,
          paymentDetails: {
            last4: this.creditCardForm.value.cardNumber.slice(-4),
            cardType: this.getCardType(this.creditCardForm.value.cardNumber)
          }
        };
      case 'UPI':
        return {
          ...baseData,
          paymentDetails: {
            upiId: this.upiForm.value.upiId,
            upiApp: this.upiForm.value.upiApp
          }
        };
      case 'Cash':
        return {
          ...baseData,
          paymentDetails: {
            confirmationCode: this.cashForm.value.confirmationCode
          }
        };
      case 'E-Wallet':
        return {
          ...baseData,
          paymentDetails: {
            walletProvider: this.walletForm.value.walletProvider,
            mobileNumber: this.walletForm.value.mobileNumber
          }
        };
      default:
        return baseData;
    }
  }

  private getCardType(cardNumber: string): string {
    const num = cardNumber.replace(/\D/g, '');
    if (/^4/.test(num)) return 'Visa';
    if (/^5[1-5]/.test(num)) return 'Mastercard';
    if (/^3[47]/.test(num)) return 'Amex';
    if (/^6(?:011|5)/.test(num)) return 'Discover';
    return 'Unknown';
  }

  private processPayment(paymentData: any): void {
    this.service.makePayment(paymentData).subscribe({
      next: (paymentRes: any) => this.handlePaymentSuccess(paymentRes),
      error: (paymentErr: any) => this.handlePaymentError(paymentErr)
    });
  }

  private handlePaymentSuccess(paymentRes: any): void {
    this.toastr.success('Payment successful!');
    this.orderData.status = "successful";
    this.orderData.paymentId = paymentRes._id;
    console.log('Payment response:', paymentRes);
    console.log('Order data:', this.orderData);
    this.service.placeOrder(this.orderData).subscribe({
      next: (orderRes: any) => this.handleOrderSuccess(orderRes),
      error: (orderErr: any) => this.handleOrderError(orderErr, paymentRes._id)
    });
  }

  private handleOrderSuccess(orderRes: any): void {
    this.toastr.success('Order placed successfully!');
    this.processTableBooking();
    this.submitRatingIfProvided(orderRes._id);
    this.cleanupAndNavigate();
  }

  private processTableBooking(): void {
    const selectedTable = localStorage.getItem('selectedTableId');
    if (selectedTable && this.bookingData) {
      this.adminService.bookTable(selectedTable, this.bookingData).subscribe({
        next: () => this.toastr.success('Table booked successfully!'),
        error: (tableErr: any) => console.error('Table booking error:', tableErr)
      });
    }
  }

  private submitRatingIfProvided(orderId: string): void {
    if (this.userRating > 0) {
      const ratingData = {
        customerId: localStorage.getItem("_id"),
        rating: this.userRating,
        feedback: this.description,
        orderId: orderId
      };
      
      this.service.giverating(ratingData).subscribe({
        next: () => console.log('Rating submitted successfully'),
        error: (ratingErr) => console.error('Rating submission failed:', ratingErr)
      });
    }
  }

  private cleanupAndNavigate(): void {
    localStorage.removeItem('cartItems');
    this.router.navigate(['/user/thankyou'], {
      state: {
        orderDetails: this.orderData,
        totalPaid: this.totalPay
      }
    });
  }

  private handleOrderError(orderErr: any, paymentId: string): void {
    this.toastr.error('Failed to place order after payment');
    console.error('Order placement error:', orderErr);
  }

  private handlePaymentError(paymentErr: any): void {
    this.toastr.error('Payment failed');
    console.error('Payment error:', paymentErr);
    
    if (paymentErr.status === 401) {
      this.router.navigate(['/auth/login']);
    }
  }

  gobacktoorders(): void {
    this.router.navigate(['/user/menu']);
  }
}