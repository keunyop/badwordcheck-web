import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = 'kevin'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false


  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.username==='kevin' && this.password === '123') {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
