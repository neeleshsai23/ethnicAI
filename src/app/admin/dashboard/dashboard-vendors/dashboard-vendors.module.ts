import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GridviewComponent } from './gridview/gridview.component';
import { MapviewComponent } from './mapview/mapview.component';

export const routes = [
  { path: "",redirectTo:'gridview',data:{breadcrumb:"Dashboard"},pathMatch: 'full'},
  { path: "gridview", component: GridviewComponent,data:{breadcrumb:"Dashboard"}},
  { path: "mapview", component: MapviewComponent,data:{breadcrumb:"Dashboard"}},


]
@NgModule({
  declarations: [  GridviewComponent, MapviewComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ]
  
})
export class DashboardVendorsModule { }
