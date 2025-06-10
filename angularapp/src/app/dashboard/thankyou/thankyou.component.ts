import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  standalone: false,
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.css'
})
export class ThankyouComponent {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gototable(){
    this.router.navigate(['/user/selecttable']);
  }
}
