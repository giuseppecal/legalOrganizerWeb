import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AuthService } from '../login/auth-service.service';
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
  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService, db: AngularFireDatabase) {
    console.log('-- LastPracticesComponent --');
    this.isLoggedIn = authService.isLoggedIn();
    if (this.isLoggedIn) {
          console.log('-- Calling pratiche for ' + authService.loggedToken);
          this.practices = db.list('/pratiche/' + authService.loggedToken);
    }
  }
}
