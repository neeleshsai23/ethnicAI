import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { MapViewComponent } from './map-view/map-view.component';
import { ArchiveComponent } from './archive/archive.component';
import { ActiveComponent } from './active/active.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const routes = [
  { path: "",redirectTo:'active',data:{breadcrumb:"Orders"},pathMatch: 'full'},
  { path: "active", component: ActiveComponent,data:{breadcrumb:"Orders"}},
  { path: "archives", component: ArchiveComponent,data:{breadcrumb:"Orders"}},
  { path: "map-view", component: MapViewComponent,data:{breadcrumb:"Orders"}},
  { path: "order-dashboard",loadChildren:"./order-dashboard/order-dashboard.module#OrderDashboardModule",component:OrderDashboardComponent,data:{breadcrumb:"Dashboard"}},
]
@NgModule({
  declarations: [ ActiveComponent,ArchiveComponent,MapViewComponent,OrderDashboardComponent,OrdersComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
  
})
export class OrdersModule { }
