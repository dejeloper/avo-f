import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Servicios */
import * as dataServices from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    // ...dataServices.services
  ]
})
export class DataModule { }
