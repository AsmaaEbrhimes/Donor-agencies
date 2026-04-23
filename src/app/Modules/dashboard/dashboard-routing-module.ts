import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Panel } from './panel/panel';
import { MainPageInDashboard } from './Components/Main_dashboard/main-page-in-dashboard/main-page-in-dashboard';
import { Setting } from './Components/setting/setting';
import { Meeting } from './Components/meeting/meeting';
import { FinancialGovernor } from './Components/financial-governor/financial-governor';
import { CreateFinancialGovernor } from './Components/create-financial-governor/create-financial-governor';
import { MainFundingRequests } from './Components/Funding_requests/main-funding-requests/main-funding-requests';

const routes: Routes = [
  {
    path: 'dashboard',
    component: Panel,
    children: [
      { path: '', component: MainPageInDashboard },
      { path: 'setting', component: Setting },
      { path: 'meeting', component: Meeting },
      { path: 'Financial_Governor', component: FinancialGovernor },
      { path: 'create_Financial_Governor', component: CreateFinancialGovernor },
      { path: 'funding_requests', component: MainFundingRequests },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
