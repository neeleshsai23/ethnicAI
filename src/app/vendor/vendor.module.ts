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

export const routes= [
    {path:"",redirectTo:"products",pathMatch:"full"},
    {path:"products",loadChildren:"./products/products.module#ProductsModule"},
    {path:"store",component:DashboardComponent,data:{breadcrumb:"Store"}},

      {path:"dashboard",component:DashboardComponent,data:{breadcrumb:"Dashboard"}},
      {path:"orders",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/payments",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},

      {path:"orders/cancellations",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},

      {path:"orders/dispatch",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/tracking",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/returns",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},
      {path:"orders/closure",component:VendorOrdersComponent,data:{breadcrumb:"Orders"}},

            {path:"logistics",component:VendorOrdersComponent,data:{breadcrumb:"Logistics"}},
            {path:"customers",component:VendorOrdersComponent,data:{breadcrumb:"Customers"}},

      {path:"finance",redirectTo:"finance/receivables",pathMatch:"full",data:{breadcrumb:"Finance"}},
      {path:"finance/receivables",component:VendorFinanceComponent,data:{breadcrumb:"Finance"}},
      {path:"finance/revenue",component:VendorFinanceComponent,data:{breadcrumb:"Finance"}},
      {path:"finance/tax",component:VendorFinanceComponent,data:{breadcrumb:"Finance"}},

      {path:"user",redirectTo:"user/users",pathMatch:"full"},
      {path:"user/users",component:VendorFinanceComponent,data:{breadcrumb:"Users"}},
      {path:"user/settings",component:VendorFinanceComponent,data:{breadcrumb:"Settings"}},
]

@NgModule({
    declarations:[DashboardComponent,VendorFinanceComponent,VendorOrdersComponent, PaymentsComponent, CancellationsComponent, DispatchComponent, TrackingComponent, ReturnsComponent, ClosureComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ]
})

export class VendorModule {}