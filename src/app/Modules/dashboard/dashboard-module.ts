import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { Panel } from './panel/panel';
import { Menue } from './menue/menue';
import { MainPageInDashboard } from './Components/Main_dashboard/main-page-in-dashboard/main-page-in-dashboard';
import { SharedModule } from '../../shared/shared-module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Report } from './Components/Main_dashboard/report/report';
import { Performanceindicators } from './Components/Main_dashboard/performanceindicators/performanceindicators';
import { SharedModule as PrimeSharedModule } from 'primeng/api';
import { MeetingCenter } from './Components/Main_dashboard/meeting-center/meeting-center';
import { Projects } from './Components/projects/projects';
@NgModule({
  declarations: [Panel, Menue, MainPageInDashboard, Report, Performanceindicators, MeetingCenter, Projects],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, AngularSvgIconModule.forRoot(),PrimeSharedModule],
})
export class DashboardModule {}
