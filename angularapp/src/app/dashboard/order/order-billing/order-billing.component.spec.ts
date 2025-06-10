import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBillingComponent } from './order-billing.component';

describe('OrderBillingComponent', () => {
  let component: OrderBillingComponent;
  let fixture: ComponentFixture<OrderBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderBillingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
