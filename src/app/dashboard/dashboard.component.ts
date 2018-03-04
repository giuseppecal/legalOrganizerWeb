import {Component, OnDestroy} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';
import {Response} from '../common/response';
import {Subscription} from 'rxjs/Subscription';
import {AlertService} from '../common/alert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnDestroy{

  public username: string;
  public isLoggedIn: boolean = false;
  private subscription$: Subscription = new Subscription();

  constructor(private authService: AuthService,
              private router: Router,
              private comunicator: AlertService) {

    console.log('-- DashboardComponent --');

    this.subscription$ = this.authService.isLoggedIn().subscribe(
        (data: boolean) => { this.isLoggedIn = data },
        error => {
                  this.comunicator.sendMessage(new Response('error', 500, error));
                  this.router.navigate(['login'])});

    if (this.isLoggedIn) {
      this.username = authService.loggedUsername;
    }
  }

  logout() {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
