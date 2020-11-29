import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllProductsComponent } from './all-products/all-products.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TransfersComponent } from './transfers/transfers.component';
import { CollectionsComponent } from './collections/collections.component';
import { ImportDialogComponent } from './all-products/import-dialog/import-dialog.component';
import { ExportDialogComponent } from './all-products/export-dialog/export-dialog.component';
import { CreateCollectionDialogComponent } from './collections/create-collection-dialog/create-collection-dialog.component';
import { AddTransferDialogComponent } from './transfers/add-transfer-dialog/add-transfer-dialog.component';

export const routes = [
    {path:"",redirectTo:"all",pathMatch:"full"},
    {path:"all",component:AllProductsComponent},
    {path:"inventory",component:InventoryComponent},
    {path:"transfers",component:TransfersComponent},
    {path:"collections",component:CollectionsComponent}
]

@NgModule({
  declarations: [ AllProductsComponent, InventoryComponent, TransfersComponent, CollectionsComponent,ImportDialogComponent, ExportDialogComponent,CreateCollectionDialogComponent,AddTransferDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[ImportDialogComponent, ExportDialogComponent,CreateCollectionDialogComponent,AddTransferDialogComponent]
})

export class ProductsModule { }
