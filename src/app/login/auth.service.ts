import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {

  authState: any = null;
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {
            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth;
            });
          }


  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user UID
  get currentEmail(): string {
    return this.authenticated ? this.authState.email : '-';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  //// Social Auth ////
  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user;
          localStorage.setItem('token', this.currentUserId);
          localStorage.setItem('email', this.currentEmail);
          localStorage.setItem('displayName', this.currentUserDisplayName);
          this.isLoginSubject.next(true);
      });
  }


  //// Anonymous Auth ////
  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
    .then((user) => {
      this.authState = user;
    })
    .catch(error => console.log(error));
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
      });
  }

  emailLogin(email: string, password: string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((user) => {
         this.authState = user;
         localStorage.setItem('token', this.currentUserId);
         localStorage.setItem('email', this.currentEmail);
         localStorage.setItem('displayName', this.currentUserDisplayName);
         this.isLoginSubject.next(true);
       });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }


  //// Sign Out ////
  signOut(): void {
      console.log('-- Logout ##');
      this.afAuth.auth.signOut();
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('displayName');
      this.isLoginSubject.next(false);
      this.router.navigate(['login']);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

    /**
   *
   * @returns {Observable<T>}
   */
   isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  get loggedUsername(): string {
    return localStorage.getItem('displayName') || 'User without a Name';
  }

  get loggedEmail(): string {
    return localStorage.getItem('email');
  }

  get loggedToken(): string {
    return localStorage.getItem('token');
  }

  //// Helpers ////
  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
      email: this.authState.email,
      name: this.authState.displayName
    }

    this.db.object(path).update(data)
      .catch(error => console.log(error));

  }

}
