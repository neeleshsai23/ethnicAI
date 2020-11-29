import { ReportsComponent } from './reports/reports.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { OrdersComponent } from './orders/orders.component';
import { CatalogComponent } from './catalog/catalog.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CategoriesComponent } from './categories/categories.component';
import { VendorsComponent } from './vendors/vendors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddVendorComponent } from './vendors/add-vendor/add-vendor.component';
import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { ShowCategoriesComponent } from './vendors/show-categories/show-categories.component';
import { ConDialogComponent } from './vendors/con-dialog/con-dialog.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { ViewCatComponent } from './categories/view-cat/view-cat.component';
import {ProductsComponent} from './products/products.component';

export const routes = [
 

    {path:"dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule",component:DashboardComponent,data:{breadcrumb:"Dashboard"}},
    { path: "vendors",loadChildren:"./vendors/vendors.module#VendorsModule", component: VendorsComponent,data:{breadcrumb:"Vendors"}},
    { path: "customers",loadChildren:"./customers/customers.module#CustomersModule", component: CustomersComponent ,data:{breadcrumb:"Customers"}},
    { path: "categories",loadChildren:"./categories/categories.module#CategoriesModule", component: CategoriesComponent,data:{breadcrumb:"Categories"}},
    // { path: "inventory",loadChildren:"./inventory/inventory.module#InventoryModule", component: InventoryComponent,data:{breadcrumb:"Inventory"}},
    { path: "products",loadChildren:"./products/products-admin.module#ProductsAdminModule", component: ProductsComponent,data:{breadcrumb:"Products"}},
    { path: "orders",loadChildren:"./orders/orders.module#OrdersModule",data:{breadcrumb:"Orders"}},
    { path: "payouts",loadChildren:"./payouts/payouts.module#PayoutsModule", component: PayoutsComponent,data:{breadcrumb:"Payouts"}},
    { path: "reports",loadChildren:"./reports/reports.module#ReportsModule", component: ReportsComponent,data:{breadcrumb:"Reports"}},
    { path: "admin",loadChildren:"./eai-admin/eai-admin.module#EaiAdminModule",data:{breadcrumb:"Admin"}},
  
]


@NgModule({
    declarations: [DashboardComponent, VendorsComponent,CategoriesComponent,InventoryComponent,CatalogComponent,ProductsComponent,ReportsComponent,AddVendorComponent,
       PayoutsComponent,CustomersComponent, AddCustomerComponent,ShowCategoriesComponent, ConDialogComponent,AddCategoryComponent,ViewCatComponent],
    imports: [
      CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[AddVendorComponent,AddCustomerComponent,ShowCategoriesComponent, ConDialogComponent,AddCategoryComponent,ViewCatComponent]
   
    
  })



export class AdminModule {}