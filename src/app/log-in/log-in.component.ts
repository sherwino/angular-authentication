import { Component, OnInit} from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  formEmail: string;
  formPassword: string;
  
  errorMessage: string;
  // @Output() onLoginSubmit = new EventEmitter<any>();

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

 submitLogin() {
   this.sessionThang.login(this.formEmail, this.formPassword )
   .then((userFromApi) => {
    this.routerThang.navigate(['/lists']);
    this.sessionThang.loggedIn(userFromApi);
   })
   .catch((errResponse) => {
     const apiInfo = errResponse.json();
     this.errorMessage = apiInfo.message;

   })
 }

}
