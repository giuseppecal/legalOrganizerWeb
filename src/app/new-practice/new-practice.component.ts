import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/compiler/src/core';
import {BsDatepickerConfig, BsLocaleService, defineLocale} from 'ngx-bootstrap';
import {listLocales} from 'ngx-bootstrap/chronos';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Practice} from '../common/practice';
import {PracticeFirebaseService} from '../last-practices/last-practices.service';

@Component({
  selector: 'app-new-practice',
  templateUrl: './new-practice.component.html',
  styleUrls: ['./new-practice.component.css']
})
export class NewPracticeComponent {

  public locale = 'it';
  public colorTheme = 'theme-dark-blue';
  public isLoggedIn: boolean;
  public practice: Practice;

  bsConfig: Partial<BsDatepickerConfig> = Object.assign({}, {containerClass: this.colorTheme});
  bsValue: Date = new Date();

  constructor(private _localeService: BsLocaleService,
              private authService: AuthService,
              private router: Router,
              private  practiceService: PracticeFirebaseService) {
    this.practice = new Practice();
  }

  public save() {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    this.practice.dataCreazione = dateTime + "";
    this.practice.dataUltimaModifica = this.practice.dataCreazione;
    this.practice.stato = 'Nuova';

    alert(JSON.stringify(this.practice));

    this.practiceService.save(this.practice);
  }
}
