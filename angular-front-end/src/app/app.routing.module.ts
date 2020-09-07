import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
    { path:'login',
      component: LoginComponent },
    { path:'welcome',
      component: WelcomeComponent }
    /*{ path:'',
      redirectTo: '/login',
      pathMatch: 'full' } */
];

// export class AppRoutingModule { }

export default appRoutes;
