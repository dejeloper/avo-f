import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modulos */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';

/* Components */
import * as dashboardComponents from './components';


@NgModule({
  declarations: [
    ...dashboardComponents.component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    NavigationModule
  ]
})
export class DashboardModule { }
