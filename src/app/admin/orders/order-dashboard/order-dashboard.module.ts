import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDashboardComponent } from './order-dashboard.component';
import { PaymentComponent } from './payment/payment.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ReturnComponent } from './return/return.component';
import { ClosureComponent } from './closure/closure.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const routes = [
  { path: "",redirectTo:'payment',data:{breadcrumb:"Dashboard"},pathMatch: 'full'},
  { path: "payment", component:PaymentComponent,data:{breadcrumb:"Dashboard"}},
  { path: "cancellation", component:  CancellationComponent,data:{breadcrumb:"Dashboard"}},
  { path: "dispatch", component: DispatchComponent,data:{breadcrumb:"Dashboard"}},
  { path: "tracking", component: TrackingComponent,data:{breadcrumb:"Dashboard"}},
  { path: "return", component:ReturnComponent,data:{breadcrumb:"Dashboard"}},
  { path: "closure", component: ClosureComponent,data:{breadcrumb:"Dashboard"}},

]
@NgModule({
  declarations: [ PaymentComponent, CancellationComponent, DispatchComponent, TrackingComponent, ReturnComponent, ClosureComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
    SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
    ChartsModule
  ]
})
export class OrderDashboardModule { }
