import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaymentsComponent } from './payments/payments.component';
import { CancellationsComponent } from './cancellations/cancellations.component';
import { DispatchComponent } from 'src/app/admin/orders/order-dashboard/dispatch/dispatch.component';
import { TrackingComponent } from 'src/app/admin/orders/order-dashboard/tracking/tracking.component';
import { ReturnsComponent } from './returns/returns.component';
import { ClosureComponent } from 'src/app/admin/orders/order-dashboard/closure/closure.component';
import { SummaryComponent } from './summary/summary.component';
import { VendorOrdersDashboardComponent } from './vendor-orders-dashboard/vendor-orders-dashboard.component';


export const routes= [
    {path:"",redirectTo:"summary",pathMatch:"full"},
    {path:"summary",component:SummaryComponent,loadChildren:"./summary/summary-vendor.module#VendorSummaryModule",data:{breadcrumb:"orders"}},
    {path:"payments",component:PaymentsComponent,data:{breadcrumb:"Orders"}},

    {path:"cancellations",component:CancellationsComponent,data:{breadcrumb:"Orders"}},

    {path:"dispatch",component:DispatchComponent,data:{breadcrumb:"Orders"}},
    {path:"tracking",component:TrackingComponent,data:{breadcrumb:"Orders"}},
    {path:"returns",component:ReturnsComponent,data:{breadcrumb:"Orders"}},
    {path:"closure",component:ClosureComponent,data:{breadcrumb:"Orders"}},
    {path:"dashboard",component:VendorOrdersDashboardComponent,loadChildren:"./vendor-orders-dashboard/vendor-orders-dashboard.module#VendorOrdersDashboardModule",data:{breadcrumb:"Dashboard"}}


]

@NgModule({
    declarations:[PaymentsComponent, CancellationsComponent, DispatchComponent, TrackingComponent, ReturnsComponent, ClosureComponent, SummaryComponent, VendorOrdersDashboardComponent,],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ]
})

export class VendorOrdersModule {}