import { AnalyticsComponent } from './analytics/analytics.component';
import { IncomeComponent } from './income/income.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



export const routes = [
  { path: "",redirectTo:'income',data:{breadcrumb:"Reports"},pathMatch: 'full'},
  { path: "income", component: IncomeComponent,data:{breadcrumb:"Reports"}},
  { path: "analytics", component: AnalyticsComponent,data:{breadcrumb:"Reports"}},

]
@NgModule({
  declarations: [IncomeComponent,AnalyticsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
  
})
export class ReportsModule { }
