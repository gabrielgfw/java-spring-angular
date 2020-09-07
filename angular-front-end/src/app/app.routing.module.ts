import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

export const appRoutes: Routes = [
    // Redirect to Login Route.
    { path:'',
      redirectTo: '/login',
      pathMatch: 'full' },
    // Login Page Route.
    { path:'login',
      component: LoginComponent },
    // Welcome Page Route.
    { path:'welcome/:name',
      component: WelcomeComponent, canActivate: [ RouteGuardService ] },
    // Todos Page Route.
    { path:'todos',
      component: ListTodosComponent, canActivate: [ RouteGuardService ] },
    // Logout Page Route.
    { path: 'logout',
      component: LogoutComponent, canActivate: [ RouteGuardService ] },


    // Não correspondendo nenhuma rota, será direcionado ao Error.
    { path:'**',
      component: ErrorComponent }
];

// export class AppRoutingModule { }

// export default appRoutes;
