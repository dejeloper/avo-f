import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import * as dashboardComponents from './components';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: dashboardComponents.DashboardHomeComponent },
      { path: 'dark', component: dashboardComponents.DashboardDarkComponent },
      { path: 'simple', component: dashboardComponents.DashboardSimpleComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
