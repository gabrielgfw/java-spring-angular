import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log('Before: ' + this.isUserLoggedIn());

    if(username === "Gabriel" && password === "genius") {
      sessionStorage.setItem('authenticatorUser', username)
      console.log('After: ' + this.isUserLoggedIn());
      return true;

    } else {
      return false;
    }

  }

  // Checa através do sessionStorage se existe valor armazenado.
  // Se existir, significa que o login foi realizado.
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatorUser');
    return !(user === null);

  }

}
