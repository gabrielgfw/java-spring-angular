import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

const appRoutes: Routes = [
    { path:'login',
      component: LoginComponent },
    { path:'welcome',
      component: WelcomeComponent },
    { path:'',
      redirectTo: '/login',
      pathMatch: 'full' },
    { path:'**',
      component: ErrorComponent }
];

// export class AppRoutingModule { }

export default appRoutes;
