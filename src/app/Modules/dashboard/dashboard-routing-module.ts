import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Panel } from './panel/panel';
import { MainPageInDashboard } from './Components/Main_dashboard/main-page-in-dashboard/main-page-in-dashboard';
import { Setting } from './Components/setting/setting';
import { Meeting } from './Components/meeting/meeting';

const routes: Routes = [
  {
    path: 'dashboard',
    component: Panel,
    children: [
      { path: '', component: MainPageInDashboard },
      { path: 'setting', component: Setting },
      { path: 'meeting', component: Meeting },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
