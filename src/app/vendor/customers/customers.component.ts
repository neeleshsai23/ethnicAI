import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";

import {ExportCustomersDialogComponent} from "./export-dialog/export-dialog.component";
import {ImportCustomersDialogComponent} from "./import-customers-dialog/import-customers-dialog.component";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  showAddCustomer: boolean = false;
  filterToggle:boolean = false;
  filterToggle1:boolean = false;
  filterToggle2:boolean = false;
  filterToggle3:boolean = false;
  filterToggle4:boolean = false;
  filterToggle5:boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  exitShowAddCustomer(){
    this.showAddCustomer = false;
  }

  openImportDialog(){
    this.dialog.open(ImportCustomersDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openExportDialog(){
    this.dialog.open(ExportCustomersDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
