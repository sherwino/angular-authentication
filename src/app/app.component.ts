import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router'; //only if you want to redirect somebody

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;
  isLoggedIn: boolean = false;

  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  privateData: any = '';

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.sessionThang.loggedIn$.subscribe((userfromApi) => {
      this.isLoggedIn = true;
    })

    this.sessionThang.checkLogin()
    .then((userInfo) => {
      this.routerThang.navigate(['/lists']);
      this.isLoggedIn = true;

    })
    .catch(( err ) => {
      this.routerThang.navigate(['/']);

    });
  }

  //   this.sessionThang.isLoggedIn()
  //     .subscribe(
  //       (user) => this.successCb(user)
  //     );
  // }

  // handleLogin(userfromApi) {
  //   this.sessionThang.login(this.formInfo)
  //     .subscribe(
  //       (user) => this.successCb(user),
  //       (err) => this.errorCb(err)
  //     );
  // }

  // signup() {
  //   this.sessionThang.signup(this.formInfo)
  //     .subscribe(
  //       (user) => this.successCb(user),
  //       (err) => this.errorCb(err)
  //     );
  // }

  logMeOut() {
    this.sessionThang.logout()
      .then(() => {
        this.routerThang.navigate(['/']);
        this.isLoggedIn = false;
      })
      .catch(()=> {});
  }

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
  }
