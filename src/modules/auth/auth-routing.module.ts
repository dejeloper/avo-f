import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import * as authComponents from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: authComponents.LoginComponent },
      { path: 'register', component: authComponents.RegisterComponent },
      { path: 'forgot', component: authComponents.ForgotComponent },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
