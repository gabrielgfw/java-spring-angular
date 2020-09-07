import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  // Importando a classe de serviço para utilizar o método de logOut().
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
    // Toda vez que a rota de LogOut for chamada, o método da classe de serviço será executado.
    this.hardcodedAuthenticationService.logOut();
  }

}
