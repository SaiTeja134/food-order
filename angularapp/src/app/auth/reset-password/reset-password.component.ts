import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminflowserviceService } from '../../Services/adminflowservice.service';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
   resetPasswordForm:FormGroup;
  token:string;

  // Add these properties
showNewPassword = false;
showConfirmPassword = false;
constructor(private readonly fb:FormBuilder,private readonly route:ActivatedRoute,private readonly router:Router,private readonly authService:AdminflowserviceService) {
    this.resetPasswordForm = fb.group({
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required]
    })
    this.token = route.snapshot.params['reset-token'];
  }
// Password visibility toggle
togglePasswordVisibility(field: string) {
  if (field === 'newPassword') {
    this.showNewPassword = !this.showNewPassword;
  } else {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}

// Password strength indicator
getPasswordStrengthClass() {
  const password = this.resetPasswordForm.controls['newPassword'].value;
  if (!password) return 'strength-0';
  
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);
  const length = password.length;
  
  if (length < 6) return 'strength-1';
  if (length < 8 || !(hasLetters && hasNumbers)) return 'strength-2';
  if (!hasSpecial) return 'strength-3';
  return 'strength-4';
}

getPasswordStrengthText() {
  const strength = this.getPasswordStrengthClass();
  switch(strength) {
    case 'strength-1': return 'Very Weak';
    case 'strength-2': return 'Weak';
    case 'strength-3': return 'Good';
    case 'strength-4': return 'Strong';
    default: return '';
  }
}

  onSubmit():void{
    if(this.resetPasswordForm.valid){
      const password = this.resetPasswordForm.controls['newPassword'].value;
      this.authService.resetPassword(password,this.token).subscribe(()=>{
      })
      this.router.navigate(['/login']);
    }
  }
}
