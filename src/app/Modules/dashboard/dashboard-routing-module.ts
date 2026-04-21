import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Panel } from './panel/panel';
import { MainPageInDashboard } from './Components/Main_dashboard/main-page-in-dashboard/main-page-in-dashboard';

const routes: Routes = [
  {
    path: 'dashboard',
    component:Panel,
    children: [
      { path: '', component: MainPageInDashboard}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
