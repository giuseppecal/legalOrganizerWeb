import {Component} from '@angular/core';
import {AuthService} from './login/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user_displayName: String;
  user_email: String;
  isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    console.log('-- AppComponent --');
    this.authService.isLoggedIn().subscribe(
      (data: boolean) => {
           this.isLoggedIn = data;
      },
      err =>  {console.log(err),
           this.router.navigate(['login'])});

    if ( !this.isLoggedIn ) {
      //this.router.navigate(['login']);
    }
  }
}
