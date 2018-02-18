import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../login/auth-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string;
  isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    console.log('-- DashboardComponent --');
    this.isLoggedIn = authService.isLoggedIn();

    if (! this.isLoggedIn) {
      this.router.navigate(['login']);
    } else {
     console.log('isLoggedIn ' + this.isLoggedIn);
     console.log('logged_displayName ' + this.authService.loggedUsername);
     this.username = authService.loggedUsername;
    }
  }

  logout() {
    this.authService.signOut();
  }

}
