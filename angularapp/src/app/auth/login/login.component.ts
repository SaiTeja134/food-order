
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';
import { User } from '../../models/user';
import { UsersService } from '../../Services/users.service';


@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {

  user: User = {
    name: '',
    password: '',
    role: ''
  };
  loginForm!: FormGroup<{
  email: FormControl<string>;
  password: FormControl<string>;
}>;

  submitted = false;
  errorMessage: string = '';
  isPasswordVisible: boolean = false;
  constructor(private formBuilder: FormBuilder, private service: AdminflowserviceService, private userService: UsersService, private router: Router, private toastr: ToastrService) {
    this.loginForm = this.formBuilder.group({
  email: this.formBuilder.control('', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(/^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}/)]
  }),
  password: this.formBuilder.control('', {
    nonNullable: true,
    validators: [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]
  })
});

  }

  ngOnInit(): void {
    this.loginForm.reset();
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit(): void {
    this.submitted = true;
    this.service.login(this.loginForm.value).subscribe((res) => {
      if (!res.error) {
        console.log(res);
        localStorage.setItem('role', res.user.role);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('_id', res.user.id);
        localStorage.setItem('phNo', res.user.phoneNo);
        localStorage.setItem('token', res.token);
        this.toastr.success('Login Successful');
        let date = new Date();
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;

        const formattedDate = `${day}-${month}-${year}`;
        const formattedTime = `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;

        localStorage.setItem('time', formattedTime)
        localStorage.setItem('date', formattedDate)
        if (res.user.role === 'user') {

          this.router.navigate(['/user/selecttable']);
        }
        else if (res.user.role === 'admin') {
          this.router.navigate(['/admin/dashboard']);
        }

      }
      else {
        console.log(res.error);
      }
    }, err => {
      this.toastr.error(err.error.message);
    }
    )
  }
  get email() {
  return this.loginForm.get('email')!;
}

get password() {
  return this.loginForm.get('password')!;
}

}