import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from '../../login/auth.service';
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
}
}
