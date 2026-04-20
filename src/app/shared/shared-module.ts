import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { SharedRoutingModule } from './shared-routing-module';
import { Tabel } from './tabel/tabel';


@NgModule({
  declarations: [
Tabel
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TableModule,
    SkeletonModule
  ]
})
export class SharedModule { }
