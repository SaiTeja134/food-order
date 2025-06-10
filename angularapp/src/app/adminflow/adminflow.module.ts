import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminflowRoutingModule } from './adminflow-routing.module';
import { AdminflowComponent } from './adminflow.component';
import { HomeComponent } from './home/home.component';
import { PaymentsComponent } from './payments/payments.component';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { TablesComponent } from './tables/tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import { SearchPipe } from '../search.pipe';

@NgModule({
  declarations: [
    AdminflowComponent,
    HomeComponent,
    PaymentsComponent,
    UsersComponent,
    MenuComponent,
    TablesComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminflowRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule
  ]
})
export class AdminflowModule { }
