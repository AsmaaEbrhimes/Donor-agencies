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
import { Projects } from './Components/folder_Projects/projects/projects';
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
import { FinancialGovernor } from './Components/Folder_Financial_convenor/financial-governor/financial-governor';
import { CreateFinancialGovernor } from './Components/Folder_Financial_convenor/create-financial-governor/create-financial-governor';
import { FundingRequests } from './Components/Funding_requests/funding-requests/funding-requests';
import { Taps } from './Components/Funding_requests/taps/taps';
import { NewReplise } from './Components/Funding_requests/new-replise/new-replise';
import { RejecteRequests } from './Components/Funding_requests/rejecte-requests/rejecte-requests';
import { AcceptedRequests } from './Components/Funding_requests/accepted-requests/accepted-requests';
import { MainFundingRequests } from './Components/Funding_requests/main-funding-requests/main-funding-requests';
import { DilogFilterProjects } from './Components/folder_Projects/dilog-filter-projects/dilog-filter-projects';
import { DialogModule } from 'primeng/dialog';
import { DetailsProject } from './Components/folder_Projects/details-project/details-project';
import { NameProject } from './Components/folder_Projects/File_details_project/name-project/name-project';
import { DescrptionProject } from './Components/folder_Projects/File_details_project/descrption-project/descrption-project';
import { LifeCycleProject } from './Components/folder_Projects/File_details_project/life-cycle-project/life-cycle-project';
import { ProjectSummeryInfo } from './Components/folder_Projects/File_details_project/project-summery-info/project-summery-info';
import { ProjectTarget } from './Components/folder_Projects/File_details_project/project-target/project-target';
import { PerformanceMetrics } from './Components/folder_Projects/File_details_project/performance-metrics/performance-metrics';
import { ReportProject } from './Components/folder_Projects/File_details_project/report-project/report-project';
import { ChallengeProject } from './Components/folder_Projects/File_details_project/challenge-project/challenge-project';
import { PartnershipManagement } from './Components/partnership-management/partnership-management';
import { DetailsFinancialConverner } from './Components/Folder_Financial_convenor/details-financial-converner/details-financial-converner';
import { Consultations } from './Components/Folder_Consultations/consultations/consultations';
import { DetailsConsultations } from './Components/Folder_Consultations/details-consultations/details-consultations';
import { BookingConsultation } from './Components/Folder_Consultations/booking-consultation/booking-consultation';
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
    DilogFilterProjects,
    DetailsProject,
    NameProject,
    DescrptionProject,
    LifeCycleProject,
    ProjectSummeryInfo,
    ProjectTarget,
    PerformanceMetrics,
    ReportProject,
    ChallengeProject,
    PartnershipManagement,
    DetailsFinancialConverner,
    Consultations,
    DetailsConsultations,
    BookingConsultation,
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
    DatePickerModule,
    DialogModule
  ],
})
export class DashboardModule {}
