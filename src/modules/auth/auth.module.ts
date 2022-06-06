import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AuthRoutingModule } from './auth-routing.module';

/* Components */
import * as authComponents from './components';


@NgModule({
  declarations: [
    ...authComponents.component
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
