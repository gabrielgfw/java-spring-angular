import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Gabriel"
  password = "" 
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    if(this.username === "Gabriel" && this.password === "genius") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
