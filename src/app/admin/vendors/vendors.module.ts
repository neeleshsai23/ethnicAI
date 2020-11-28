import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from './vendors.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { ConDialogComponent } from './con-dialog/con-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,SharedModule
  ],
 
  
})
export class VendorsModule { }
