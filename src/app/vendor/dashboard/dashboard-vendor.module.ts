import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverviewComponent } from './overview/overview.component';
import { CancelledOrdersComponent } from './cancelled-orders/cancelled-orders.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TopTenProductsComponent } from './top-ten-products/top-ten-products.component';
import { GridviewComponent } from './overview/gridview/gridview.component';
import { MapviewComponent } from './overview/mapview/mapview.component';

export const routes = [
  { path: "",redirectTo:'overview',data:{breadcrumb:"Dashboard"},pathMatch: 'full'},
  {path:"overview",component:OverviewComponent,loadChildren:"./overview/overview.module#OverviewModule",data:{breadcrumb:"Dashboard"}},
      {path:"revenue",component:RevenueComponent,data:{breadcrumb:"Dashboard"}},
      {path:"cancelled",component:CancelledOrdersComponent,data:{breadcrumb:"Dashboard"}},
      {path:"topten",component:TopTenProductsComponent,data:{breadcrumb:"Dashboard"}},


]
@NgModule({
  declarations: [OverviewComponent, RevenueComponent, CancelledOrdersComponent, TopTenProductsComponent ],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
  
})
export class DashboardVendorModule { }
