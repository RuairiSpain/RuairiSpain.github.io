import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashManagementComponent } from './cash-management.component';
import { CashUpComponent } from './cash-up/cash-up.component';
import { DepositComponent } from './deposit/deposit.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: '',
    component: CashManagementComponent,
    children: [
      {
        path: 'cashup',
        component: CashUpComponent,
      },
      {
        path: 'deposit',
        component: DepositComponent,
      },
      {
        path: 'reconciliation',
        component: ReconciliationComponent,
      },
      {
        path: 'report',
        component: ReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashManagementRoutingModule { }
