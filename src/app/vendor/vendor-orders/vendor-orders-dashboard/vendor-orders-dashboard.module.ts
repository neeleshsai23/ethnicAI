import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ItemsVendorOrdersComponent } from './items-vendor-orders/items-vendor-orders.component';
import { ConsignmentsVendorOrdersComponent } from './consignments-vendor-orders/consignments-vendor-orders.component';
import { ShipmentsVendorOrdersComponent } from './shipments-vendor-orders/shipments-vendor-orders.component';
import { ReturnsVendorOrdersComponent } from './returns-vendor-orders/returns-vendor-orders.component';
import { CancellationsVendorOrdersComponent } from './cancellations-vendor-orders/cancellations-vendor-orders.component';
import { RefundsVendorOrdersComponent } from './refunds-vendor-orders/refunds-vendor-orders.component';
import { AddConsignmentDialogComponent } from './consignments-vendor-orders/add-consignment-dialog/add-consignment-dialog.component';


export const routes= [
    {path:"",redirectTo:"items",pathMatch:"full"},
    {path:"items",component:ItemsVendorOrdersComponent},
    {path:"consignments",component:ConsignmentsVendorOrdersComponent},
    {path:"shipments",component:ShipmentsVendorOrdersComponent},
    {path:"returns",component:ReturnsVendorOrdersComponent},
    {path:"cancellations",component:CancellationsVendorOrdersComponent},
    {path:"refunds",component:RefundsVendorOrdersComponent},


]

@NgModule({
    declarations:[ItemsVendorOrdersComponent, ConsignmentsVendorOrdersComponent, ShipmentsVendorOrdersComponent, ReturnsVendorOrdersComponent, CancellationsVendorOrdersComponent, RefundsVendorOrdersComponent, AddConsignmentDialogComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
      entryComponents:[AddConsignmentDialogComponent]
})

export class VendorOrdersDashboardModule {}