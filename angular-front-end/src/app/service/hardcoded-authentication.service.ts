import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {

    if(username === "Gabriel" && password === "genius") {
      sessionStorage.setItem('authenticatorUser', username)
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

  logOut() {
    sessionStorage.removeItem('authenticatorUser');
  }

}
