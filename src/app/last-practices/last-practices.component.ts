import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AuthService } from './auth-service.service';
import { Observable } from '@firebase/util';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-last-practices',
  templateUrl: './last-practices.component.html',
  styleUrls: ['./last-practices.component.css'],
  providers: [AngularFireDatabase]
})
export class LastPracticesComponent {

  practices: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.afAuth.auth.signInAnonymously().then(
      (auth) => {
        if (auth != null) {
          this.practices = db.list('/pratiche/Q481Cy6lHsPCmJGbcpsDb4hILv23');
        }
      });
  }
}
