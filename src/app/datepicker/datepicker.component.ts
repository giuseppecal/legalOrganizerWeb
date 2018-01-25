import {Component} from '@angular/core';
import {BsDatepickerConfig, BsLocaleService, defineLocale} from 'ngx-bootstrap';
import { listLocales } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
  locale = 'it';
  colorTheme = 'theme-dark-blue';

  constructor(private _localeService: BsLocaleService) {
    this._localeService.use(this.locale);
  }

  bsConfig: Partial<BsDatepickerConfig> =  Object.assign({}, { containerClass: this.colorTheme });
  bsValue: Date = new Date();
}

