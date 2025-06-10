
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminflowComponent } from './adminflow.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentsComponent } from './payments/payments.component';
import { TablesComponent } from './tables/tables.component';
import { UsersComponent } from './users/users.component';
import { adminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    component:AdminflowComponent,
    children: [
      { path:'dashboard',component:HomeComponent,canActivate:[adminGuard]},
      { path:'menuitems',component:MenuComponent,canActivate:[adminGuard]},
      {path:'payment',component:PaymentsComponent,canActivate:[adminGuard]},
      {path:'tables',component:TablesComponent,canActivate:[adminGuard]},
      {path:'users',component:UsersComponent,canActivate:[adminGuard]},
    ]
  },
  {path:'',redirectTo:'dashboard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminflowRoutingModule { }