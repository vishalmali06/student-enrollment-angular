import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardHomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule
  ]
})
export class DashboardModule { }
