import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //only if you want to redirect somebody
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: 'IronTrello App'
  isLoggedIn: boolean = false;
  user: any;

  // formInfo = {
  //   username: '',
  //   password: ''
  // };
  // error: string;
  // privateData: any = '';

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.sessionThang.loggedIn$.subscribe((userfromApi) => {
      this.isLoggedIn = true;
    })

    this.sessionThang.checkLogin()
    // if logged in, redirect to /lists
    .then((userInfo) => {
      this.routerThang.navigate(['/lists']);
      this.isLoggedIn = true;

    })
    // else redirect to
    .catch(( err ) => {
      this.routerThang.navigate(['/']);

    });
  }

  logMeOut() {
    this.sessionThang.logout()
    .then(() => {
      this.routerThang.navigate(['/']);
      this.isLoggedIn = false;
    })
    .catch(()=> {});
  }

  handleLogin(userfromApi) {
    this.isLoggedIn = true;
  }
}

  //   this.sessionThang.isLoggedIn()
  //     .subscribe(
  //       (user) => this.successCb(user)
  //     );
  // }

  // signup() {
  //   this.sessionThang.signup(this.formInfo)
  //     .subscribe(
  //       (user) => this.successCb(user),
  //       (err) => this.errorCb(err)
  //     );
  // }


  // getPrivateData() {
  //   this.sessionThang.getPrivateData()
  //     .subscribe(
  //       (data) => this.privateData = data,
  //       (err) => this.error = err
  //     );
  // }

  // errorCb(err) {
  //   this.error = err;
  //   this.user = null;
  // }

  // successCb(user) {
  //   this.user = user;
  //   this.error = null;
  // }
