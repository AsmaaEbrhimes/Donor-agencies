import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { SharedRoutingModule } from './shared-routing-module';
import { Tabel } from './tabel/tabel';
import { Header } from './header/header';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { DrawerModule } from 'primeng/drawer';
import { SideNav } from './side-nav/side-nav';
import { DatePipe } from '@angular/common';
import { NoData } from './no-data/no-data';
@NgModule({
  declarations: [Tabel, Header, SideNav, NoData],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TableModule,
    SkeletonModule,
    AngularSvgIconModule.forRoot(),
    DrawerModule,

  ],
  exports: [Tabel, Header, SideNav,NoData],
  providers: [DatePipe],
})
export class SharedModule {}
