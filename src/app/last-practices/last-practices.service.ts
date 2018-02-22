import { Injectable } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

@Injectable()
export class LastPracticesService {

  constructor(private authService: AuthService, private db: AngularFireDatabase) { }

  public getLastPractices(): FirebaseListObservable<any[]> {
    console.log('-- LastPracticesComponent --');
    if (this.authService.loggedToken) {
          console.log('-- Calling pratiche for ' + this.authService.loggedToken);
          return this.db.list('/pratiche/' + this.authService.loggedToken);
    }
  }
}
