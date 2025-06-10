import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminflow',
  standalone: false,
  templateUrl: './adminflow.component.html',
  styleUrl: './adminflow.component.css'
})
export class AdminflowComponent {
   @Output() clickOutside = new EventEmitter<void>();

  constructor(private router:Router,private elementRef: ElementRef) { }

  email = localStorage?.getItem('email');
  loginTime = localStorage?.getItem('time');
  name = localStorage?.getItem('name');
  logOut(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  menuopen:boolean=false
  dropdownOpen(){
     if(localStorage.getItem('email')){
      this.menuopen=!this.menuopen

     }
  }
  public onClick(targetElement: any): void {
    const isClickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      // this.clickOutside.emit();
    }
  }

}
