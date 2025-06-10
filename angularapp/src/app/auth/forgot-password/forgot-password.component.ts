import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  standalone: false
})
export class ForgotPasswordComponent {

  forgotPasswordForm: FormGroup;
  emailError: string | null = null;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AdminflowserviceService,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }



  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const email = params['email'];
      if (email) {
        this.forgotPasswordForm.patchValue({ email });
      }
    });
  }




  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe({
        next: () => {
          this.toastr.success('Reset link sent successfully!', 'Success');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          if (err.message) {
            this.emailError = 'Email does not exist. Please try again.';
          } else {
            this.emailError = 'An error occurred. Please try again later.';
          }
        }
      });
    }
  }
}