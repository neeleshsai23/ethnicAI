import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { ActiveComponent } from './active/active.component';
import { ScheduledComponent } from './scheduled/scheduled.component';
import { ExpiredComponent } from './expired/expired.component';

export const routes = [
    {path:"",redirectTo:"all",pathMatch:"full"},
    {path:"all",component:AllComponent},
    {path:"active",component:ActiveComponent},
    {path:"scheduled",component:ScheduledComponent},
    {path:"expired",component:ExpiredComponent}

]
@NgModule({
  declarations: [AllComponent, ActiveComponent, ScheduledComponent, ExpiredComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[]
  
})
export class AutomaticDiscountsModule { }
