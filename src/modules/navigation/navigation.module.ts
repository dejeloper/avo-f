import { ModuleWithProviders, NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';

/* Components */
import * as navigationComponents from './components';

/* Containers */
import * as navigationContainers from './containers';

/* Layouts */
import * as navigationLayouts from './layouts';

/* Services */
import * as navigationServices from './services';
import * as dataServices from '@modules/data/services';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';

@NgModule({
  declarations: [
    ...navigationContainers.containers,
    ...navigationComponents.components,
    ...navigationLayouts.layouts,
    LayoutDefaultComponent,
    // ...dataServices.services
  ],
  imports: [
    CommonModule, AppCommonModule, RouterModule
  ],
  exports: [
    ...navigationContainers.containers,
    ...navigationComponents.components,
    ...navigationLayouts.layouts,
  ],
  providers: [
    ...dataServices.services,
    ...navigationServices.services,
  ],
})
export class NavigationModule {
  static forRoot(): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
      providers: [
        ...navigationServices.services,
        ...dataServices.services,
      ]
    }
  }
}
