import {Component} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string;
  public isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    console.log('-- DashboardComponent --');
  }

  logout() {
    this.authService.signOut();
  }

}
