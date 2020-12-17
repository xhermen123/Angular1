import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../common/material/material.module';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    TopBarComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    TopBarComponent,
    ProgressComponent
  ]
})
export class ComponentsModule { }
