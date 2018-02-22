import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AuthService } from '../login/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-last-practices',
  templateUrl: './last-practices.component.html',
  styleUrls: ['./last-practices.component.css'],
  providers: [AngularFireDatabase]
})
export class LastPracticesComponent {

  practices: FirebaseListObservable<any[]>;

  constructor(private authService: AuthService, db: AngularFireDatabase) {
    console.log('-- LastPracticesComponent --');
    if (authService.loggedToken) {
          console.log('-- Calling pratiche for ' + authService.loggedToken);
          this.practices = db.list('/pratiche/' + authService.loggedToken);
    }
  }
}
