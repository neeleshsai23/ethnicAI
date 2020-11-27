import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { ViewProductsDialogComponent } from './view-products-dialog/view-products-dialog.component';
import { ImportDilaogComponent } from './import-dilaog/import-dilaog.component';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';

export const routes = [
  {path:"",redirectTo:"all",pathMatch:"full"},
  {path:"all",component:AllComponent}

]

@NgModule({
  declarations: [ AllComponent, ViewProductsDialogComponent, ImportDilaogComponent, ExportDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[ViewProductsDialogComponent,ImportDilaogComponent,ExportDialogComponent]
  
})

export class InventoryVendorModule { }
