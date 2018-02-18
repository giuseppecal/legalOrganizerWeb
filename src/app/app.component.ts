import {Component} from '@angular/core';
import { AuthService } from './login/auth-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user_displayName: String;
  user_email: String;
  isLoggedIn: Observable<boolean>;

  constructor(public authService: AuthService, private router: Router) {
      console.log('-- AppComponent --');
      this.isLoggedIn = authService.isLoggedIn();
      if (! this.isLoggedIn) {
        console.log('No user data!');
        this.router.navigate(['login']);
      } else {
        console.log('isLoggedIn ' + this.isLoggedIn);
        console.log('logged_displayName ' + this.authService.loggedUsername);
      }
  }
}
