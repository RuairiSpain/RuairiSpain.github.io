import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashManagementComponent } from './cash-management.component';
import { CashUpComponent } from './cash-up/cash-up.component';
import { NewCashupComponent } from './cash-up/new-cashup/new-cashup.component';
import { ViewCashupComponent } from './cash-up/view-cashup/view-cashup.component';
import { BankingComponent } from './deposit/banking/banking.component';
import { DepositComponent } from './deposit/deposit.component';
import { PendingComponent } from './deposit/pending/pending.component';
import { CardComponent } from './reconciliation/card/card.component';
import { CashComponent } from './reconciliation/cash/cash.component';
import { ReconcileLandingComponent } from './reconciliation/reconcile-landing/reconcile-landing.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { ThirdPartyComponent } from './reconciliation/third-party/third-party.component';
import { AllReportComponent } from './report/all-report/all-report.component';
import { EditReportComponent } from './report/edit-report/edit-report.component';
import { NewReportComponent } from './report/new-report/new-report.component';
import { ReportComponent } from './report/report.component';
import { ViewReportComponent } from './report/view-report/view-report.component';

const routes: Routes = [
  {
    path: '',
    component: CashManagementComponent,
    children: [
      {
        path: 'cashup',
        component: CashUpComponent,
        children:[
          {
            path: '',
            redirectTo: 'view-cashup',
            pathMatch: 'full'
          },
          {
            path: 'view-cashup',
            component: ViewCashupComponent,
          },
        
        ]
      },
      {
        path: 'cashup/new-cashup',
        component:NewCashupComponent
      }, 
      {
        path: 'deposit',
        component: DepositComponent,
        children:[
          {
            path: '',
            redirectTo: 'pending',
            pathMatch: 'full'
          },
          {
            path: 'pending',
            component: PendingComponent,
          },
          {
            path: 'banking',
            component: BankingComponent,
          },
        ]
      },
      {
        path: 'reconciliation',
        component: ReconciliationComponent,
        children:[
          {
            path: '',
            redirectTo: 'landing',
            pathMatch: 'full'
          },
          {
            path: 'landing',
            component: ReconcileLandingComponent
          },
          {
            path: 'cash',
            component: CashComponent,
          },
          {
            path: 'card',
            component: CardComponent,
          },
          {
            path: 'third-party',
            component: ThirdPartyComponent,
          },
         

        ]
      },
      {
        path: 'report',
        component: ReportComponent,
        children:[
          {
            path:'',
            redirectTo: 'all-report',
            pathMatch: 'full'
          },
          {
            path: 'all-report',
            component: AllReportComponent
          },
         {
            path: 'new-report',
            component: NewReportComponent
        },
        { 
          path: 'view-report',
          component: ViewReportComponent
        },
        { 
          path: 'edit-report',
          component: EditReportComponent
        },
      ]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashManagementRoutingModule { }
