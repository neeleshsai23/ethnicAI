import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RadarComponent } from './radar/radar.component';
import { StockPositionComponent } from './stock-position/stock-position.component';
import { SkuMasterComponent } from './sku-master/sku-master.component';
import { SizesComponent } from './sizes/sizes.component';
import { ColorsComponent } from './colors/colors.component';
import { ImagesComponent } from './images/images.component';
import { DocsComponent } from './docs/docs.component';

export const routes= [
    {path:"",redirectTo:"radar",pathMatch:"full"},
    {path:"radar",component:RadarComponent},
    {path:"stockpos",component:StockPositionComponent},
    {path:"skumaster",component:SkuMasterComponent},
    {path:"sizes",component:SizesComponent},
    {path:"colors",component:ColorsComponent},
    {path:"images",component:ImagesComponent},
    {path:"docs",component:DocsComponent}
]

@NgModule({
    declarations:[  RadarComponent, StockPositionComponent, SkuMasterComponent, SizesComponent, ColorsComponent, ImagesComponent, DocsComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
      entryComponents:[]
})

export class ProductDashboardModule {}