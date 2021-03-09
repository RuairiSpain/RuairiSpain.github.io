import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad/dashborad.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PASComponent } from './pas.component';

const routes: Routes = [{ 
  path: '', 
  component: PASComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboradComponent,
    },
    {
      path: 'cash-management',
      loadChildren: () => import('./cash-management/cash-management.module')
        .then(m => m.CashManagementModule),
    },
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module')
        .then(m => m.EmployeeModule),
    },
    {
      path: 'stock',
      loadChildren: () => import('./stock/stock.module')
        .then(m => m.StockModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PASRoutingModule { }
