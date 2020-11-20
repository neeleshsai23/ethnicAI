import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollectionsComponent } from './collections/collections.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddCollectionDialogComponent } from './collections/add-collection-dialog/add-collection-dialog.component';
import { FeaturesDialogComponent } from './collections/features-dialog/features-dialog.component';
import { PricingDialogComponent } from './collections/pricing-dialog/pricing-dialog.component';

export const routes= [
    {path:"",redirectTo:"collections",pathMatch:"full"},
    {path:"inventory",component:InventoryComponent,data:{breadcrumb:"Inventory"}},
    {path:"collections",component:CollectionsComponent,data:{breadcrumb:"Collections"}}
]

@NgModule({
    declarations:[ CollectionsComponent, InventoryComponent, AddCollectionDialogComponent, FeaturesDialogComponent, PricingDialogComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
      entryComponents:[AddCollectionDialogComponent, FeaturesDialogComponent, PricingDialogComponent]
})

export class ProductsModule {}