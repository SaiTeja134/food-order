import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SelectTableComponent } from './select-table/select-table.component';
import { OrderComponent } from './order/order.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { userGuard } from '../guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component:DashboardComponent,
    children:[
      {path:'selecttable',component:SelectTableComponent,canActivate:[userGuard]},
      {path:'order',component:OrderComponent,canActivate:[userGuard]},
      {path:'feedback',component:FeedbackComponent,canActivate:[userGuard]},
      {path:'thankyou',component:ThankyouComponent,canActivate:[userGuard]},
      {path:'paymentgateway',component:PaymentGatewayComponent,canActivate:[userGuard]},
      {path:'paymentmode',component:PaymentmodeComponent,canActivate:[userGuard]},
      {path:'',redirectTo:'/user/selecttable',pathMatch:'full'}
    ]
  }   
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }