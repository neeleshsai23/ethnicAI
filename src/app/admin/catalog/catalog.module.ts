import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CatalogComponent } from './catalog.component';
import { AllProductsAdminComponent } from './all-products-admin/all-products-admin.component';
import { InventoryAdminComponent } from './inventory-admin/inventory-admin.component';
import { ImportDialogComponent } from './all-products-admin/import-dialog/import-dialog.component';
import { ExportDialogComponent } from './all-products-admin/export-dialog/export-dialog.component';
import { AddProductDialogAdminComponent } from './all-products-admin/add-product-dialog-admin/add-product-dialog-admin.component';

export const routes =[
  {path:"",redirectTo:"all",pathMatch:"full"},
  {path:"all",component:AllProductsAdminComponent},
  {path:"inventory",component:InventoryAdminComponent} 
]

@NgModule({
  declarations: [AllProductsAdminComponent, InventoryAdminComponent, ImportDialogComponent, ExportDialogComponent, AddProductDialogAdminComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
  ],
  entryComponents:[AddProductDialogAdminComponent,ImportDialogComponent,ExportDialogComponent]
})

export class CatalogModule { }
