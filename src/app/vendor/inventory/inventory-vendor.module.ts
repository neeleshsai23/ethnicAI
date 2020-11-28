import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartsModule} from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OpeningComponent } from './opening/opening.component';
import { IncomingComponent } from './incoming/incoming.component';
import { OutgoingComponent } from './outgoing/outgoing.component';
import { ClosingComponent } from './closing/closing.component';
import { PhysicalComponent } from './physical/physical.component';
import { ReconciliationComponent } from './reconciliation/reconciliation.component';
import { AddInventoryDialogComponent } from './incoming/add-inventory-dialog/add-inventory-dialog.component';
import { AddPhysicalDialogComponent } from './physical/add-physical-dialog/add-physical-dialog.component';


export const routes= [
    {path:"",redirectTo:"opening",pathMatch:"full"},
    {path:"opening",component:OpeningComponent},
    {path:"incoming",component:IncomingComponent},
    {path:"outgoing",component:OutgoingComponent},
    {path:"closing",component:ClosingComponent},
    {path:"physical",component:PhysicalComponent},
    {path:"reconciliation",component:ReconciliationComponent}
]

@NgModule({
    declarations:[OpeningComponent, IncomingComponent, OutgoingComponent, ClosingComponent, PhysicalComponent, ReconciliationComponent, AddInventoryDialogComponent, AddPhysicalDialogComponent],
    imports: [
        CommonModule,NgxChartsModule,RouterModule.forChild(routes),
        SharedModule,ConfirmationPopoverModule,ReactiveFormsModule,FormsModule,
        ChartsModule
      ],
      entryComponents:[AddInventoryDialogComponent, AddPhysicalDialogComponent]
})

export class VendorInventoryModule {}
