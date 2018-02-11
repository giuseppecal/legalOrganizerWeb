import { Injectable } from '@angular/core';
import {Practice} from '../model/practice';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {LASTPRACTICES} from './mock-practices';

@Injectable()
export class LastPracticesService {

  constructor() {
    console.log('welcome! LastPracticesService Service');
  }

  getLastPractices(): Observable<Practice[]> {
    // mock last practices
    return of(LASTPRACTICES);
  }
}
