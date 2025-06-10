import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  role:string='';
  name:string='';
  email:string='';
  phoneNo:string='';
  password:string='';

  isPasswordVisible: boolean =false;
  constructor(private toastr: ToastrService,private router: Router,private adminflowService: AdminflowserviceService){

  }

  ngOnInit(): void {
  
  }

  togglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(registerForm: NgForm): void{
    if(registerForm.valid)
    {
      const registerData = registerForm.value;
      this.adminflowService.register(registerData).subscribe(
        response => {
          this.toastr.success('Registration successful','Success');
          registerForm.reset();
          this.router.navigate(['/login']);
        },
        error => {
          this.toastr.error('Registration failed','Error');
        }
      )
    }
  }
}