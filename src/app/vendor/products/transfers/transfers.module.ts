import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { PendingComponent } from './pending/pending.component';
import { PartialComponent } from './partial/partial.component';
import { CompletedComponent } from './completed/completed.component';
import { AddTransferDialogComponent } from './add-transfer-dialog/add-transfer-dialog.component';

export const routes = [
    {path:"",redirectTo:"all",pathMatch:"full"},
    {path:"all",component:AllComponent},
    {path:"pending",component:PendingComponent},
    {path:"partial",component:PartialComponent},
    {path:"completed",component:CompletedComponent},
    

]

@NgModule({
  declarations: [ AllComponent, PendingComponent, PartialComponent, CompletedComponent, AddTransferDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[AddTransferDialogComponent]
  
})

export class TransfersModule { }
