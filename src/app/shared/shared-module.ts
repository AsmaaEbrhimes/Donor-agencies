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
import { PopoverModule } from 'primeng/popover';
import { Notivication } from './notivication/notivication';
import { Logout } from './logout/logout';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [Tabel, Header, SideNav, NoData, Notivication, Logout],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TableModule,
    SkeletonModule,
    AngularSvgIconModule.forRoot(),
    DrawerModule,
    PopoverModule,
    DialogModule
  ],
  exports: [Tabel, Header, SideNav,NoData],
  providers: [DatePipe],
})
export class SharedModule {}
