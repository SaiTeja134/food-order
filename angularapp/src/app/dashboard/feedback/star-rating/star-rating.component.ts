import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() starCount: number = 5;
  @Output() ratingUpdated = new EventEmitter<number>();

  stars: number[]=[0,0,0,0,0];
  hovered:number=0;
  constructor() { }

  ngOnInit(): void {
    this.calculateStars(this.rating);
  }

  calculateStars(rating: number):void{
   // this.stars = Array.from({length : this.starCount}, (_,index) => index < rating);
  }

  onStarClick(index: number): void{
    this.rating = index + 1;
    this.ratingUpdated.emit(this.rating);
  }

  hoverRating(rating:number){
    this.hovered = rating;
  }

  setRating(rating:number){
    this.rating = rating;
    this.ratingUpdated.emit(this.rating);
  }
}
