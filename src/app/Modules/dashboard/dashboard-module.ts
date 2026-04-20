import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { Panel } from './panel/panel';
import { Menue } from './menue/menue';
import { MainPageInDashboard } from './Components/main-page-in-dashboard/main-page-in-dashboard';
import { Projects } from './Components/projects/projects';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    Panel,
    Menue,
    MainPageInDashboard,
    Projects
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
