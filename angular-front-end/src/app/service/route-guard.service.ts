import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
// CanActivate é responsável em aplicar segurança no acesso às rotas da aplicação.
// No caso, foi feita uma lógica reutilizando o método 'isUserLoggedIn()' do serviço hardcoded.
// Sendo o return = true, a única forma do canActivate liberar o acesso à rota.
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthenticationService.isUserLoggedIn()) {
      // Caso o retorno seja true, o método liberará o acesso às rotas que estiverem utilizando
      // o canActivate na em suas rotas.
      return true;
    } else {
      // Caso o retorno seja false, ele redirecionará o usuário para a página de login.
      // Negando o acesso para a página solicitada em específico.
      this.router.navigate(['login']);
      return false;
    }
  }

}
