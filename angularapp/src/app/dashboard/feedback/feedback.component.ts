import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-feedback',
  standalone: false,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  userRating: number = 0;

  onRatingUpdated(newRating: number) {
    this.userRating = newRating;
    console.log('User rating:', this.userRating);
  }
  constructor(private router:Router,private usersService:UsersService) { }

  ngOnInit(): void {
  }

  goToThankyou(){
    this.router.navigate(['/user/thankyou']);
  }
}
