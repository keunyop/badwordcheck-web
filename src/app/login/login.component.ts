import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from './../service/basic-authentication.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'kevin';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleBasicAuthLogin() {
    if (
      this.basicAuthenticationService
        .executeAuthenticationService(this.username, this.password)
        .subscribe(
          (data) => {
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;
          },
          (error) => {
            this.invalidLogin = true;
          }
        )
    ) {
      // Redirect to Welcom Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
