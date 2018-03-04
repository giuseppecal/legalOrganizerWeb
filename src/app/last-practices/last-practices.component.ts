import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { LastPracticesService } from './last-practices.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-last-practices',
  templateUrl: './last-practices.component.html'
})
export class LastPracticesComponent {

  public practices: FirebaseListObservable<any[]>;

  constructor(private practicesService: LastPracticesService) {
    this.practices = practicesService.getLastPractices();
  }
}
