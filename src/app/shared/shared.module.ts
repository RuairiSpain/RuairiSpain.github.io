import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MonthNavigatorComponent } from './month-navigator/month-navigator.component';


@NgModule({
  declarations: [MonthNavigatorComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [MonthNavigatorComponent]
})
export class SharedModule { }
