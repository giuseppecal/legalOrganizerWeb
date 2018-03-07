import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './header/navbar/navbar.component';
import { NavscrollerComponent } from './header/navscroller/navscroller.component';
import { NewPracticeComponent } from './new-practice/new-practice.component';
import { LastPracticesComponent } from './last-practices/last-practices.component';
import {FormsModule} from '@angular/forms';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { itLocale } from 'ngx-bootstrap/locale';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {environment} from '../environments/environment';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { PracticeFirebaseService } from './last-practices/last-practices.service';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { RegistrationComponent } from './registration/registration.component';
import {AlertService} from './common/alert.service';
import {AlertComponent} from './common/alert.component';

defineLocale('it', itLocale);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavscrollerComponent,
    NewPracticeComponent,
    LastPracticesComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    RegistrationComponent,
    AlertComponent
  ],
  imports: [
    routing,
    BrowserModule,
    NgbModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService, PracticeFirebaseService, AngularFireDatabase, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
