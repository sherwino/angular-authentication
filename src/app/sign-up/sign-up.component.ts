import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser: any = {};
  errorMessage: string;

  // @Output() onSignUpSubmit = new EventEmitter<any>();

  constructor(
    private sessionThang: SessionService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  }

    submitSignup (userFromApi) {
      this.sessionThang.signup(this.newUser)
      .then(() => { 
        this.routerThang.navigate(['/lists']);
        this.sessionThang.loggedIn(userFromApi);
      })
      .catch((errResponse) => {
        const apiInfo = errResponse.json();
        this.errorMessage = apiInfo.message;
      })
    }


}
