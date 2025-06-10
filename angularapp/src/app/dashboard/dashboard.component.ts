import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
   name: any
  email: any
  tableno: any
  date: any
  time: any

  constructor(private router: Router
  ) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email')
    this.name = localStorage.getItem('name')
    console.log(this.name);

    this.date = localStorage.getItem('date')
    this.time = localStorage.getItem('time')
  }
  menuopen: boolean = false
  submitBtnName = "Login"
  dropdownOpen() {

    if (localStorage.getItem('email')) {
      this.menuopen = !this.menuopen
      this.submitBtnName = "Logout"
    }
    else {
      this.router.navigate(['/login'])
    }
  }
  logOut() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }
} 
