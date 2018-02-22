import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  username: string;

  constructor(private authService: AuthService, private router: Router) {
    console.log('-- DashboardComponent --');
    this.username = authService.loggedUsername;
  }

  logout() {
    this.authService.signOut();
  }

}
