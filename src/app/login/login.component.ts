import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  isLoggedIn: boolean;

  constructor(public authService: AuthService, private router: Router) {
    console.log('-- LoginComponent --');
    this.isLoggedIn = authService.authenticated;
    if (this.isLoggedIn) {
      authService.signOut();
    }
  }

  signInWithGoogle() {
    console.log('signInWithGoogle');
      this.authService.signInWithGoogle().then((data) => {
        this.afterSignIn();
    });
  }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['dashboard']);
  }
}
