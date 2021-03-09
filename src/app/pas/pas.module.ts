import { NgModule } from '@angular/core';
import { PASRoutingModule } from './pas-routing.module';
import { PASComponent } from './pas.component';
import { ThemeModule } from '../@theme/theme.module';
import { DashboradComponent } from './dashborad/dashborad.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CashManagementModule } from './cash-management/cash-management.module';
import { EmployeeModule } from './employee/employee.module';
import { StockModule } from './stock/stock.module';
import { NbMenuModule } from '@nebular/theme';


@NgModule({
  declarations: [PASComponent, DashboradComponent],
  imports: [
    PASRoutingModule,
    ThemeModule,
    NbMenuModule,
    CashManagementModule,
    EmployeeModule,
    StockModule,
    MiscellaneousModule,
  ]
})
export class PASModule { }
