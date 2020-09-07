import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

const appRoutes: Routes = [
    // Redirect to Login Route.
    { path:'',
      redirectTo: '/login',
      pathMatch: 'full' },
    // Login Page Route.
    { path:'login',
      component: LoginComponent },
    // Welcome Page Route.
    { path:'welcome/:name',
      component: WelcomeComponent },
    // Todos Page Route.
    { path:'todos',
      component: ListTodosComponent },
    // Não correspondendo nenhuma rota, será direcionado ao Error.
    { path:'**',
      component: ErrorComponent }
];

// export class AppRoutingModule { }

export default appRoutes;
