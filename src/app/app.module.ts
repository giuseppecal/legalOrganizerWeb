import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { NavscrollerComponent } from './navscroller/navscroller.component';
import { NewPracticeComponent } from './new-practice/new-practice.component';
import { LastPracticesComponent } from './last-practices/last-practices.component';
import {FormsModule} from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { itLocale } from 'ngx-bootstrap/locale';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {environment} from '../environments/environment';
import { AuthService } from './login/auth-service.service';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

defineLocale('it', itLocale);

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-practice', component: NewPracticeComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavscrollerComponent,
    NewPracticeComponent,
    LastPracticesComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false } ),
    BrowserModule,
    NgbModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
