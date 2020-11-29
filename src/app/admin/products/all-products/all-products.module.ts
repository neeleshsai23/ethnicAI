import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { ActiveComponent } from './active/active.component';
import { DraftComponent } from './draft/draft.component';
import { ArchivedComponent } from './archived/archived.component';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import { ImportDialogComponent } from './import-dialog/import-dialog.component';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';

export const routes = [
    // {path:"",redirectTo:"all",pathMatch:"full"},
    // {path:"all",component:AllComponent},
    // {path:"active",component:ActiveComponent},
    // {path:"draft",component:DraftComponent},
    // {path:"archived",component:ArchivedComponent},
    

]

@NgModule({
  declarations: [ AllComponent, ActiveComponent, DraftComponent, ArchivedComponent, AddProductDialogComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
  entryComponents:[AddProductDialogComponent]  
  
})

export class AllProductsModule { }
