import {Component, OnDestroy} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Response} from '../common/response';
import {AlertService} from '../common/alert.service';
import {User} from '../common/user';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{

  public user: User;
  public isLoggedIn: boolean = false;
  public response: Response;
  public subscription$: Subscription = new Subscription();

  constructor(public authService: AuthService,
              private router: Router,
              private comunicator: AlertService) {

    console.log('-- LoginComponent --');

    this.user = new User();

    this.subscription$ = this.authService.isLoggedIn().subscribe(
      (data: boolean) => { this.isLoggedIn = data },
      error => {
        this.comunicator.sendMessage(new Response('error', 500, error));
        this.router.navigate(['login'])});

    if (this.isLoggedIn) {
      authService.signOut();
    }
  }

  public signInWithEmailAndPassword() {
    this.authService.emailLogin(this.user.email, this.user.password)
      .then(res => {
          this.afterSignIn();
        },
        (error) => {
          this.response = error;
          this.comunicator.sendMessage(new Response('error', 500, error));
        }).catch(error => {
      this.response = error;
      this.comunicator.sendMessage(new Response('error', 500, error));
    });
  }

  public signInWithFacebook() {
    this.authService.facebookLogin().then((data) => {
      this.afterSignIn();
    });
  }

  public signInWithGoogle() {
    this.authService.signInWithGoogle().then((data) => {
      this.afterSignIn();
    });
  }

  public afterSignIn(): void {
    this.router.navigate(['dashboard']);
  }

  public ngOnDestroy(): void {
   this.subscription$.unsubscribe();
  }
}
