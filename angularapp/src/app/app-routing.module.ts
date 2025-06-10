
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { LandingpageComponent } from './auth/landingpage/landingpage.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'reset-password/:reset-token', component: ResetPasswordComponent },
  {
    path: 'admin',
    loadChildren: () => import('./adminflow/adminflow.module').then(
      a => a.AdminflowModule
    ),
    //canActivate:[AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./dashboard/dashboard.module').then(d =>
      d.DashboardModule),
    // canActivate:[AuthGuard]
  },
  { path: '', component: LandingpageComponent },
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }