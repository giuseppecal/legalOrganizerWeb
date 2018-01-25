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
import { DatepickerComponent } from './datepicker/datepicker.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { itLocale } from 'ngx-bootstrap/locale';
defineLocale('it', itLocale);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavscrollerComponent,
    NewPracticeComponent,
    LastPracticesComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
