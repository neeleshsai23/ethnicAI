import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SummaryComponent } from './summary/summary.component';
import { DashboardVendorsComponent } from './dashboard-vendors/dashboard-vendors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const routes = [
  { path: "",redirectTo:'summary',data:{breadcrumb:"Dashboard"},pathMatch: 'full'},
  { path: "summary", component: SummaryComponent,data:{breadcrumb:"Dashboard"}},
  { path: "vendors", component: DashboardVendorsComponent,data:{breadcrumb:"Dashboard"}},

]
@NgModule({
  declarations: [ SummaryComponent, DashboardVendorsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
  
})
export class DashboardModule { }
