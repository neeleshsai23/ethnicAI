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

export const routes = [
    {path:"",redirectTo:"all",pathMatch:"full"},
    {path:"all",component:AllProductsComponent,loadChildren:"./all-products/all-products.module#AllProductsModule"},
    {path:"inventory",component:InventoryComponent,loadChildren:"./inventory/inventory-vendor.module#InventoryVendorModule"},
    {path:"transfers",component:TransfersComponent,loadChildren:"./transfers/transfers.module#TransfersModule"},
    {path:"collections",component:CollectionsComponent,loadChildren:"./collections/collections.module#CollectionsModule"}
    

]
@NgModule({
  declarations: [ AllProductsComponent, InventoryComponent, TransfersComponent, CollectionsComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
  
})
export class ProductsModule { }
