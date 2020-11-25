import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorOrdersComponent } from './vendor-orders/vendor-orders.component';
import { VendorFinanceComponent } from './vendor-finance/vendor-finance.component';
import { PaymentsComponent } from './vendor-orders/payments/payments.component';
import { CancellationsComponent } from './vendor-orders/cancellations/cancellations.component';
import { DispatchComponent } from './vendor-orders/dispatch/dispatch.component';
import { TrackingComponent } from './vendor-orders/tracking/tracking.component';
import { ReturnsComponent } from './vendor-orders/returns/returns.component';
import { ClosureComponent } from './vendor-orders/closure/closure.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { RevenueComponent } from './dashboard/revenue/revenue.component';
import { CancelledOrdersComponent } from './dashboard/cancelled-orders/cancelled-orders.component';
import { TopTenProductsComponent } from './dashboard/top-ten-products/top-ten-products.component';
import { DealsComponent } from './deals/deals.component';
import { BundlesComponent } from './bundles/bundles.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAccountComponent } from './my-account/my-account.component';

export const routes= [
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {path:"radar",component:LogisticsComponent,data:{breadcrumb:"Radar"}},
    {path:"store",component:LogisticsComponent,data:{breadcrumb:"Store"}},

    {path:"catalog",loadChildren:"./catalog/catalog-vendor.module#VendorCatalogModule"},
    {path:"store",component:DashboardComponent,data:{breadcrumb:"Store"}},
    {path:"deals",component:DealsComponent,data:{breadcrumb:"Deals"}},
    {path:"bundles",component:BundlesComponent,data:{breadcrumb:"Bundles"}},
    {path:"inventory",component:InventoryComponent,loadChildren:"./inventory/inventory-vendor.module#VendorInventoryModule",data:{breadcrumb:"Inventory"}},

      {path:"dashboard",component:DashboardComponent,loadChildren:"./dashboard/dashboard-vendor.module#DashboardVendorModule",data:{breadcrumb:"Dashboard"}},
      

      {path:"orders",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/payments",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},

      {path:"orders/cancellations",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},

      {path:"orders/dispatch",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/tracking",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/returns",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/closure",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},

            {path:"logistics",component:LogisticsComponent,data:{breadcrumb:"Logistics"}},
            {path:"reviews",component:ReviewsComponent,data:{breadcrumb:"Reviews"}},
            {path:"profile",component:ProfileComponent,data:{breadcrumb:"Profile"}},
            {path:"customers",component:VendorOrdersComponent,data:{breadcrumb:"Customers"}},

      {path:"finance",redirectTo:"finance/receivables",pathMatch:"full",data:{breadcrumb:"Finance"}},
      {path:"finance/receivables",component:VendorFinanceComponent,data:{breadcrumb:"Finance"}},
      {path:"finance/revenue",component:VendorFinanceComponent,data:{breadcrumb:"Finance"}},
      {path:"finance/tax",component:VendorFinanceComponent,data:{breadcrumb:"Finance"}},

      {path:"user",redirectTo:"user/users",pathMatch:"full"},
      {path:"user/users",component:VendorFinanceComponent,data:{breadcrumb:"Users"}},
      {path:"user/settings",component:VendorFinanceComponent,data:{breadcrumb:"Settings"}},
      {path:"user/support",component:VendorFinanceComponent,data:{breadcrumb:"Settings"}},
      {path:"user/masterdata",component:VendorFinanceComponent,data:{breadcrumb:"Settings"}},
      {path:"user/lookup",component:VendorFinanceComponent,data:{breadcrumb:"Settings"}},



]

@NgModule({
    declarations:[DashboardComponent,VendorFinanceComponent,VendorOrdersComponent, PaymentsComponent, CancellationsComponent, DispatchComponent, TrackingComponent, ReturnsComponent, ClosureComponent,  DealsComponent, BundlesComponent, InventoryComponent, LogisticsComponent, ReviewsComponent, ProfileComponent, MyAccountComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ]
})

export class VendorModule {}