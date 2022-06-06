import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsModule } from '@modules/icons/icons.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const modules = [IconsModule, NgbModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules],
  exports: [...modules]
})
export class AppCommonModule { }
