import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {ExportOrdersDialogComponent} from './export-orders-dialog/export-orders-dialog.component';

@Component({
  selector: 'app-vendor-orders',
  templateUrl: './vendor-orders.component.html',
  styleUrls: ['./vendor-orders.component.scss']
})
export class VendorOrdersComponent implements OnInit {

  showOrderDashboard: boolean = false;
  filterToggle:boolean = false;
  filterToggle1:boolean = false;
  filterToggle2:boolean = false;
  filterToggle3:boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  exitOrderDashboard(){
    this.showOrderDashboard = false;
  }

  openExportDialog(){
    this.dialog.open(ExportOrdersDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
