import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {BsDatepickerConfig, BsLocaleService, defineLocale} from 'ngx-bootstrap';
import { listLocales } from 'ngx-bootstrap/chronos';
import { AuthService } from '../login/auth-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-practice',
  templateUrl: './new-practice.component.html',
  styleUrls: ['./new-practice.component.css']
})
export class NewPracticeComponent {

  locale = 'it';
  colorTheme = 'theme-dark-blue';
  isLoggedIn: Observable<boolean>;

  constructor(private _localeService: BsLocaleService,
        private authService: AuthService,
        private router: Router) {

          console.log('NewPracticeComponent');
          this._localeService.use(this.locale);
          this.isLoggedIn = authService.isLoggedIn();
          if (! this.isLoggedIn) {
            console.log('No user data!');
            // this.router.navigate(['login']);
          } else {
            console.log('isLoggedIn ' + this.isLoggedIn);
            console.log('logged_displayName ' + this.authService.loggedUsername);
          }
  }

  bsConfig: Partial<BsDatepickerConfig> =  Object.assign({}, { containerClass: this.colorTheme });
  bsValue: Date = new Date();
}
