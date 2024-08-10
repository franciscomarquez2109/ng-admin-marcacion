import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { BodyComponent } from '../body/body.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    SidenavComponent,
    BodyComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
