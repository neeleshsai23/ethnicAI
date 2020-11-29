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
import { DealsComponent } from './deals/deals.component';
import { BundlesComponent } from './bundles/bundles.component';
// import { InventoryComponent } from './inventory/inventory.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProfileComponent } from './profile/profile.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { VendorOrdersDashboardComponent } from './vendor-orders/vendor-orders-dashboard/vendor-orders-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import {CreateDiscountDialogComponent} from './deals/create-discount-dialog/create-discount-dialog.component';
import { AddCustomerDialogComponent } from './customers/add-customer-dialog/add-customer-dialog.component';
import { ExportCustomersDialogComponent } from './customers/export-dialog/export-dialog.component';
import { ImportCustomersDialogComponent } from './customers/import-customers-dialog/import-customers-dialog.component';
import { ExportOrdersDialogComponent } from './vendor-orders/export-orders-dialog/export-orders-dialog.component';


export const routes= [
    {path:"",redirectTo:"dashboard",pathMatch:"full"},
    {path:"radar",component:LogisticsComponent,data:{breadcrumb:"Radar"}},
    {path:"store",component:LogisticsComponent,data:{breadcrumb:"Store"}},

    {path:"products",component:ProductsComponent,loadChildren:"./products/products.module#ProductsModule",data:{breadcrumb:"Products"}},
    {path:"store",component:DashboardComponent,data:{breadcrumb:"Store"}},
    {path:"deals",component:DealsComponent,loadChildren:"./deals/deals.module#DealsModule",data:{breadcrumb:"Deals"}},
      {path:"customers",component:CustomersComponent,data:{breadcrumb:"Customers"}},
    //     {path:"inventory",component:InventoryComponent,loadChildren:"./inventory/inventory-vendor.module#VendorInventoryModule",data:{breadcrumb:"Inventory"}},

      {path:"dashboard",component:DashboardComponent,loadChildren:"./dashboard/dashboard-vendor.module#DashboardVendorModule",data:{breadcrumb:"Dashboard"}},
      

      {path:"orders",component:VendorOrdersComponent,loadChildren:"./vendor-orders/vendor-orders.module#VendorOrdersModule",data:{breadcrumb:"Orders"}},
      {path:"orders/dashboard",component:VendorOrdersDashboardComponent,loadChildren:"./vendor-orders/vendor-orders-dashboard/vendor-orders-dashboard.module#VendorOrdersDashboardModule",data:{breadcrumb:"Dashboard"}},
            

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
    declarations:[DashboardComponent,VendorFinanceComponent,VendorOrdersComponent, CreateDiscountDialogComponent , DealsComponent, BundlesComponent,  LogisticsComponent, ReviewsComponent, ProfileComponent, MyAccountComponent,VendorOrdersDashboardComponent, ProductsComponent, CustomersComponent,AddCustomerDialogComponent,ExportCustomersDialogComponent,ImportCustomersDialogComponent,ExportOrdersDialogComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
      entryComponents:[ExportCustomersDialogComponent,ImportCustomersDialogComponent,ExportOrdersDialogComponent]
})

export class VendorModule {}