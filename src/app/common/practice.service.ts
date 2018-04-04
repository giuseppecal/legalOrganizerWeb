import {Injectable} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import {Practice} from './practice';
import {AlertService} from './alert.service';
import {Response} from './response';
import {Router} from '@angular/router';

@Injectable()
export class PracticeFirebaseService {

  constructor(private authService: AuthService,
              private comunicator: AlertService,
              private router: Router,
              private db: AngularFireDatabase) {
  }

  public lastPractices() : any {
    if (this.authService.loggedToken) {
      console.log('-- Calling pratiche for ' + this.authService.loggedToken);
      return this.db.list('/pratiche/' + this.authService.loggedToken);
    }
  }

  public save(practice: Practice): PromiseLike<any> {
    if (this.authService.loggedToken) {
      console.log('-- Calling save for ' + this.authService.loggedToken);
      return this.lastPractices().push(practice)
        .then(resolve => {
          this.comunicator.sendMessage(new Response('success', 200, "Practice Rrgistred successfully"));
          this.router.navigate(['dashboard']);
        }, reject => {
          this.comunicator.sendMessage(new Response('error', 500, reject));
          this.router.navigate(['new-practice']);
        });
    }
  }
}
