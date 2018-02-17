import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {BsDatepickerConfig, BsLocaleService, defineLocale} from 'ngx-bootstrap';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-new-practice',
  templateUrl: './new-practice.component.html',
  styleUrls: ['./new-practice.component.css']
})
export class NewPracticeComponent {

  locale = 'it';
  colorTheme = 'theme-dark-blue';
  constructor(private _localeService: BsLocaleService) {
    this._localeService.use(this.locale);
  }

  bsConfig: Partial<BsDatepickerConfig> =  Object.assign({}, { containerClass: this.colorTheme });
  bsValue: Date = new Date();
}
