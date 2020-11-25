import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CollectionsComponent } from './collections.component';
import { AddCollectionDialogComponent } from './add-collection-dialog/add-collection-dialog.component';
import { FeaturesDialogComponent } from './features-dialog/features-dialog.component';
import { PricingDialogComponent } from './pricing-dialog/pricing-dialog.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';

export const routes= [
    {path:"",component:CollectionsComponent,data:{breadcrumb:"Products"}},
    {path:"dashboard",component:ProductDashboardComponent,loadChildren:"./product-dashboard/product-dashboard.module#ProductDashboardModule",data:{breadcrumb:"Product Dashboard"}}
]

@NgModule({
    declarations:[ CollectionsComponent, AddCollectionDialogComponent, FeaturesDialogComponent, PricingDialogComponent, ProductDashboardComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
      entryComponents:[AddCollectionDialogComponent, FeaturesDialogComponent, PricingDialogComponent]
})

export class CollectionsModule {}