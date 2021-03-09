import { NgModule } from '@angular/core';
import { CashManagementRoutingModule } from './cash-management-routing.module';
import { CashUpComponent } from './cash-up/cash-up.component';
import { DepositComponent } from './deposit/deposit.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ReportComponent } from './report/report.component';
import { CashManagementComponent } from './cash-management.component';


@NgModule({
  imports: [CashManagementRoutingModule],
  declarations: [CashManagementComponent, CashUpComponent, DepositComponent, ReconciliationComponent, ReportComponent],
})
export class CashManagementModule { }
