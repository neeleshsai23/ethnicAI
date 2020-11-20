import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {VendorsComponent} from './vendors.component';
import { OnboardVendorDialogComponent } from './onboard-vendor-dialog/onboard-vendor-dialog.component';
import { GridColumnsDialogComponent } from './grid-columns-dialog/grid-columns-dialog.component';
import { CountriesDialogComponent } from './countries-dialog/countries-dialog.component';
import { ProductCategoriesDialogComponent } from './product-categories-dialog/product-categories-dialog.component';
import { OrderStatusDialogComponent } from './order-status-dialog/order-status-dialog.component';


export const routes = [
    {path:"",component:VendorsComponent,data:{breadcrumb:"Vendors"}},
]

@NgModule({
    declarations:[VendorsComponent,OnboardVendorDialogComponent, GridColumnsDialogComponent, CountriesDialogComponent, ProductCategoriesDialogComponent, OrderStatusDialogComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
    entryComponents:[OnboardVendorDialogComponent,GridColumnsDialogComponent,CountriesDialogComponent,ProductCategoriesDialogComponent,OrderStatusDialogComponent]
})

export class VendorsModule {}