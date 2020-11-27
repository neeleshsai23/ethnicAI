import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImportCustomersDialogComponent } from './import-customers-dialog/import-customers-dialog.component';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { ReturningComponent } from './returning/returning.component';
import { AbandonedComponent } from './abandoned/abandoned.component';
import { EmailSubscribersComponent } from './email-subscribers/email-subscribers.component';

export const routes = [
    {path:"",redirectTo:"all",pathMatch:"full"},
    {path:"all",component:AllComponent},
    {path:"new",component:NewComponent},
    {path:"returning",component:ReturningComponent},
    {path:"abandoned",component:AbandonedComponent},
    {path:"emailsubs",component:EmailSubscribersComponent}
]


@NgModule({
  declarations: [ImportCustomersDialogComponent, ExportDialogComponent, AddCustomerDialogComponent, AllComponent, NewComponent, ReturningComponent, AbandonedComponent, EmailSubscribersComponent],
  imports: [
    CommonModule,NgxChartsModule,RouterModule.forChild(routes),
      SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
      ChartsModule
    ],
    entryComponents:[ImportCustomersDialogComponent,ExportDialogComponent,AddCustomerDialogComponent]
  
})
export class CustomersModule { }
