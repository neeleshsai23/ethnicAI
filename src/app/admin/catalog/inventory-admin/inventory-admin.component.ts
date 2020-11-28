import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

import {ExportDialogComponent} from '../all-products-admin/export-dialog/export-dialog.component';
import {ImportDialogComponent} from '../all-products-admin/import-dialog/import-dialog.component';

@Component({
  selector: 'app-inventory-admin',
  templateUrl: './inventory-admin.component.html',
  styleUrls: ['./inventory-admin.component.scss']
})
export class InventoryAdminComponent implements OnInit {

  constructor(public dialog:MatDialog, public route: Router) { }

  ngOnInit() {
  }

  openViewProductsDialog(){
    this.route.navigate(['/eai/products/all'])
    // this.dialog.open(ViewProductsDialogComponent,{
    //   width:"600px",
    //   height:"auto"
    // })
  }

  openImportDialog(){
    this.dialog.open(ImportDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openExportDialog(){
    this.dialog.open(ExportDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
