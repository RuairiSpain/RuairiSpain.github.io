import { NgModule } from '@angular/core';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from '../employee/employee.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { RequestComponent } from './request/request.component';
import { PayrollComponent } from './payroll/payroll.component';


@NgModule({
  declarations: [EmployeeComponent, AttendanceComponent, RequestComponent, PayrollComponent],
  imports: [
    EmployeeRoutingModule,
  ],
})
export class EmployeeModule { }
