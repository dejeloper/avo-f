import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Modulos */
import { DataModule } from './data.module';

/* Rutas */
export const ROUTES: Routes = [];

@NgModule({
  imports: [DataModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class DataRoutingModule { }
