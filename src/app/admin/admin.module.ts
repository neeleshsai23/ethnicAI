import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminFinanceComponent } from "./admin-finance/admin-finance.component";
import { AdminOrdersComponent } from "./admin-orders/admin-orders.component";
import { AdminComponent } from "./admin/admin.component";
import { CustomersComponent } from "./customers/customers.component";
import { LogisticsComponent } from "./logistics/logistics.component";
import { RadarComponent } from "./radar/radar.component";

export const routes = [
    {path:"",redirectTo:"vendors",pathMatch:"full"},
    {path:"vendors",loadChildren:"./vendors/vendors.module#VendorsModule",data:{breadcrumb:"Vendors"}},
    {path:"radar",component:RadarComponent,data:{breadcrumb:"Radar"}},
    {path:"customers",component:CustomersComponent,data:{breadcrumb:"Customers"}},
    {path:"orders",component:AdminOrdersComponent,data:{breadcrumb:"Orders"}},
    {path:"logistics",component:LogisticsComponent,data:{breadcrumb:"Logistics"}},
    {path:"finance",component:AdminFinanceComponent,data:{breadcrumb:"Finance"}},
    {path:"admin",redirectTo:"admin/masterdata",pathMatch:"full"},
    {path:"admin/masterdata",component:AdminComponent,data:{breadcrumb:"Admin"}},
    {path:"admin/users",component:AdminComponent,data:{breadcrumb:"Admin"}},
    {path:"admin/lookup",component:AdminComponent,data:{breadcrumb:"Admin"}},
    {path:"admin/settings",component:AdminComponent,data:{breadcrumb:"Admin"}},
]


@NgModule({
    declarations: [RadarComponent,CustomersComponent,AdminOrdersComponent,LogisticsComponent,AdminFinanceComponent,AdminComponent],
    imports: [
      CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
    
  })



export class AdminModule {}