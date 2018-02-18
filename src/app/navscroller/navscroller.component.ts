import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from '../login/auth-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navscroller',
  templateUrl: './navscroller.component.html',
  styleUrls: ['./navscroller.component.css']
})
export class NavscrollerComponent {

  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    console.log('-- NavscrollerComponent --');
    this.isLoggedIn = authService.isLoggedIn();
    if (!this.isLoggedIn) {
      console.log('No user data!');
      // this.router.navigate(['login']);
    } else {
      console.log('isLoggedIn ' + this.isLoggedIn);
      console.log('logged_displayName ' + this.authService.loggedUsername);
    }
}
}
