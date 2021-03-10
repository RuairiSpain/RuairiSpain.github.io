import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeComponent } from './employee.component';
import { PayrollComponent } from './payroll/payroll.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'attendance',
        component: AttendanceComponent,
      },
      {
        path: 'payroll',
        component: PayrollComponent,
      },
      {
        path: 'request',
        component: RequestComponent,
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
