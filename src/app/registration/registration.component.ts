import {Component, OnInit} from '@angular/core';
import {User} from '../common/user';
import {FormGroup} from '@angular/forms';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public user: User;
  public validConfirmPassword: string;
  public validPassword: string;
  public invalid: boolean = false;

  public registrationResponse: string;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  public validateConfirmPassword() {
    if (this.user.confirmPassword != this.user.password) {
      this.validConfirmPassword = 'Please confirm a valid Password';
      this.invalid = true;
    } else {
      this.validConfirmPassword = '';
      this.invalid = false;
    }
  }

  public clearConfirmPassword() {
    this.validConfirmPassword = '';
  }

  public validatePassword() {
    if (!this.user.password) {
      this.validPassword = 'Your Password is required';
      this.invalid = true;
    } else if (this.user.password.length < 8) {
      this.validPassword = 'Password must be length at least 8 chars';
      this.invalid = true;
    } else {
      this.validPassword = '';
      this.invalid = false;
    }
  }

  public registration() {
    this.authService.emailSignUp(this.user.email, this.user.password).then(res => {
        this.router.navigate(['login']);
      },(error) => {
        //FAILURE
        this.registrationResponse = error;
      })
      .catch(error => this.registrationResponse = error
      );
  }
}
