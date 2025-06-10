import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { OrderComponent } from './order/order.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { StarRatingComponent } from './feedback/star-rating/star-rating.component';
import { OrderBillingComponent } from './order/order-billing/order-billing.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    FeedbackComponent,
    OrderComponent,
    SelectTableComponent,
    ThankyouComponent,
    PaymentGatewayComponent,
    StarRatingComponent,
    OrderBillingComponent,
    PaymentmodeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class DashboardModule { }
