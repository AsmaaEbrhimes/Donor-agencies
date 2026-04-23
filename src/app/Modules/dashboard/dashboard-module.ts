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
import { PieCharts } from './Charts/pie-charts/pie-charts';
import { BarCharts } from './Charts/bar-charts/bar-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { Financing } from './Components/Main_dashboard/financing/financing';
import { SelectModule } from 'primeng/select';
import { Consultant } from './Components/Main_dashboard/consultant/consultant';
import { CarouselModule } from 'primeng/carousel';
import { Setting } from './Components/setting/setting';
import { Meeting } from './Components/meeting/meeting';
import { DatePickerModule } from 'primeng/datepicker';
import { FinancialGovernor } from './Components/financial-governor/financial-governor';
import { CreateFinancialGovernor } from './Components/create-financial-governor/create-financial-governor';
import { FundingRequests } from './Components/Funding_requests/funding-requests/funding-requests';
import { Taps } from './Components/Funding_requests/taps/taps';
import { NewReplise } from './Components/Funding_requests/new-replise/new-replise';
import { RejecteRequests } from './Components/Funding_requests/rejecte-requests/rejecte-requests';
import { AcceptedRequests } from './Components/Funding_requests/accepted-requests/accepted-requests';
import { MainFundingRequests } from './Components/Funding_requests/main-funding-requests/main-funding-requests';

@NgModule({
  declarations: [
    Panel,
    Menue,
    MainPageInDashboard,
    Report,
    Performanceindicators,
    MeetingCenter,
    Projects,
    PieCharts,
    BarCharts,
    Financing,
    Consultant,
    Setting,
    Meeting,
    FinancialGovernor,
    CreateFinancialGovernor,
    FundingRequests,
    Taps,
    NewReplise,
    RejecteRequests,
    AcceptedRequests,
    MainFundingRequests,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    AngularSvgIconModule.forRoot(),
    PrimeSharedModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    SelectModule,
    CarouselModule,
    DatePickerModule
  ],
})
export class DashboardModule {}
