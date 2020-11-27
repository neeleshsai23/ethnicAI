import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { CreateDiscountDialogComponent } from './create-discount-dialog/create-discount-dialog.component';
import { DiscountCodesComponent } from './discount-codes/discount-codes.component';
import { AutomaticDiscountsComponent } from './automatic-discounts/automatic-discounts.component';

export const routes = [
    {path:"",redirectTo:"codes",pathMatch:"full"},
    {path:"codes",component:DiscountCodesComponent,loadChildren:"./discount-codes/discount-codes.module#DiscountCodesModule"},
    {path:"autodiscounts",component:AutomaticDiscountsComponent,loadChildren:"./automatic-discounts/automatic-discounts.module#AutomaticDiscountsModule"}
]

@NgModule({
  declarations: [ ExportDialogComponent, CreateDiscountDialogComponent, DiscountCodesComponent, AutomaticDiscountsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[ExportDialogComponent,CreateDiscountDialogComponent]
  
})
export class DealsModule { }
