import { NgModule } from '@angular/core';
import { CashManagementRoutingModule } from './cash-management-routing.module';
import { CashUpComponent } from './cash-up/cash-up.component';
import { DepositComponent } from './deposit/deposit.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ReportComponent } from './report/report.component';
import { CashManagementComponent } from './cash-management.component';
import { PendingComponent } from './deposit/pending/pending.component';
import { BankingComponent } from './deposit/banking/banking.component';
import { NewCashupComponent } from './cash-up/new-cashup/new-cashup.component';
import { ViewCashupComponent } from './cash-up/view-cashup/view-cashup.component';
import { ViewReportComponent } from './report/view-report/view-report.component';
import { NewReportComponent } from './report/new-report/new-report.component';
import { EditReportComponent } from './report/edit-report/edit-report.component';
import { AllReportComponent } from './report/all-report/all-report.component';
import { CashComponent } from './reconciliation/cash/cash.component';
import { CardComponent } from './reconciliation/card/card.component';
import { ThirdPartyComponent } from './reconciliation/third-party/third-party.component';
import { ReconcileLandingComponent } from './reconciliation/reconcile-landing/reconcile-landing.component';


@NgModule({
  imports: [CashManagementRoutingModule],
  declarations: [CashManagementComponent, CashUpComponent, DepositComponent, ReconciliationComponent, ReportComponent, PendingComponent, BankingComponent, NewCashupComponent, ViewCashupComponent, ViewReportComponent, NewReportComponent, EditReportComponent, AllReportComponent, CashComponent, CardComponent, ThirdPartyComponent, ReconcileLandingComponent],
})
export class CashManagementModule { }
