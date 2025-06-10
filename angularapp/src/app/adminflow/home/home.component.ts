import { Component, OnInit } from '@angular/core';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  getPaymentResult: any[] = [];
  getPaymentCount: number = 0;
  error: string | null = '';
  totalUsers: any;
  totalMenuItemsCount: any;
  totalTablesCount: any;
  constructor(
    private service: AdminflowserviceService
  ) {}

  ngOnInit(): void {
    this.getPaymentData();
    this.getUserCount();
    this.getAllMenuCount();
    this.getAllTablesCount();
  }

  getPaymentData() {
    this.service.getPayment().subscribe((res) => {
      if (!res['error']) {
        this.getPaymentResult = res['data'];
        const data = res['data'].map((res: { [x: string]: any; }) => {
          this.service.getPaymentByEmail(res['email']).subscribe((list) => {
            res['LastSpent'] = list['data'][list['data'].length - 1].totalPrice;
          });
          return res;
        });
        let count = 0;
        this.getPaymentResult.forEach((element: { [x: string]: number; }) => {
          count = count + element['totalPrice'];
        });
        this.getPaymentCount = count;
        this.error = null;
      } else {
        this.error = 'No Data Found.';
      }
    });
  }

  //Getting all users count
  getUserCount(){
    this.service.getAllUsers().subscribe((res)=>{
      this.totalUsers = res.data.length;
    })
  }

  //Getting all menu items count
  getAllMenuCount(){
    this.service.getAllMenuItems().subscribe((res)=>{
      this.totalMenuItemsCount = res.data.length;
    })
  }

  //Getting all menu items count
  getAllTablesCount(){
    this.service.selectTable().subscribe((res)=>{
      
      this.totalTablesCount = res.data.capacity2.length + res.data.capacity4.length + res.data.capacity6.length;
    })
  }
}
