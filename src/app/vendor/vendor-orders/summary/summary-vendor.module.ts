import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AnalyticsSummaryComponent } from './analytics-summary/analytics-summary.component';
import { SummaryGridviewComponent } from './summary-gridview/summary-gridview.component';
import { SummaryMapviewComponent } from './summary-mapview/summary-mapview.component';


export const routes= [
  {path:"",redirectTo:"analytics",pathMatch:"full"},
  {path:"analytics",component:AnalyticsSummaryComponent},
  {path:"gridview",component:SummaryGridviewComponent},
  {path:"mapview",component:SummaryMapviewComponent}
]

@NgModule({
    declarations:[AnalyticsSummaryComponent, SummaryGridviewComponent, SummaryMapviewComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ]
})

export class VendorSummaryModule {}