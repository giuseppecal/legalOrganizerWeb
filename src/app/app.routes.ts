import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewPracticeComponent } from './new-practice/new-practice.component';
import {RegistrationComponent} from './registration/registration.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new-practice',
    component: NewPracticeComponent
  },
  {
    path: 'signup',
    component: RegistrationComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(routes);
