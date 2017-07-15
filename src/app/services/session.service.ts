import { Injectable } from '@angular/core';
import { Router } from '@angular/router'; //only if you want to redirect somebody
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {

baseUrl: string = environment.apiURL;
  private loggedInSource = new Subject<any>();

  loggedIn$ = this.loggedInSource.asObservable();
  // app component will subscribe to this 'loggedIn$
  
  constructor(
    private myHttpThang: Http,
    private routerThang: Router
  ) { }

  loggedIn (userInfo) {
    this.loggedInSource.next(userInfo);
  }

  checkLogin() {
    return this.myHttpThang.get(this.baseUrl + '/api/checkLogin',
    { withCredentials: true})
    .toPromise()
    .then(res => res.json());

  }


  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(userInfo) {
    return this.myHttpThang.post(this.baseUrl + `/signup`, userInfo,
      { withCredentials: true})
      .toPromise()
      .then( res => res.json());
  }

  login(email, password) {
    return this.myHttpThang
    .post(this.baseUrl + '/api/login/', 
      { loginEmail: email, loginPassword: password},
      { withCredentials: true})
      .toPromise()
      .then( res => res.json());
      // .map(res => res.json())
      // .catch(this.handleError);
  }

  logout() {
    return this.myHttpThang.post(this.baseUrl + `/logout`, {}, { withCredentials: true})
      .toPromise()
      .then( res => res.json());
  }

  // isLoggedIn() {
  //   return this.myHttpThang.get(`/loggedin`)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }

  // getPrivateData() {
  //   return this.myHttpThang.get(`/private`)
  //     .map(res => res.json())
  //     .catch(this.handleError);
  // }
}

