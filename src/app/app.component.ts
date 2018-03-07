import {Component} from '@angular/core';
import {AuthService} from './login/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Response} from './common/response';
import {Subscription} from 'rxjs/Subscription';
import {AlertService} from './common/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoggedIn: boolean;
  public subscription$: Subscription = new Subscription();


  constructor(public authService: AuthService,
              private router: Router,
              private comunicator: AlertService) {

    console.log('-- AppComponent --');

    this.subscription$ = this.authService.isLoggedIn().subscribe(
      (data: boolean) => {
        this.isLoggedIn = data;
      },
      error => {
        this.comunicator.sendMessage(new Response('error', 500, error));
        this.router.navigate(['login']);
      });

    if (this.isLoggedIn) {
      authService.signOut();
    }
  }
}
