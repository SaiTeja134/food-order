import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminflowComponent } from './adminflow.component';

describe('AdminflowComponent', () => {
  let component: AdminflowComponent;
  let fixture: ComponentFixture<AdminflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
