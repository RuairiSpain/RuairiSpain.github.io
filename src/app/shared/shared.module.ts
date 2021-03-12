import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MonthNavigatorComponent } from './month-navigator/month-navigator.component';
import { FloatingBadgeComponent } from './floating-badge/floating-badge.component';

const COMPONENTS = [
  MonthNavigatorComponent,
  FloatingBadgeComponent,
];

const PIPES = [

];

@NgModule({
  declarations: [ ...COMPONENTS, ...PIPES],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [ ...COMPONENTS, ...PIPES ],
})
export class SharedModule { }
