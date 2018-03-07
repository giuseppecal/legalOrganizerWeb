import {Injectable} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Practice} from '../common/practice';

@Injectable()
export class PracticeFirebaseService {

  constructor(private authService: AuthService, private db: AngularFireDatabase) {
  }

  public getLastPractices(): FirebaseListObservable<any[]> {
    if (this.authService.loggedToken) {
      console.log('-- Calling pratiche for ' + this.authService.loggedToken);
      return this.db.list('/pratiche/' + this.authService.loggedToken);
    }
  }

  public save(practice: Practice): PromiseLike<any> {
    if (this.authService.loggedToken) {
      console.log('-- Calling save for ' + this.authService.loggedToken);
      return this.getLastPractices().push(practice)
        .then(resolve => {
          console.log('success');
        }, reject => {
          console.log('error');
        });
    }
  }
}
