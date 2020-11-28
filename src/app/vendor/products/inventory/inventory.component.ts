import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

import {ImportDialogComponent} from '../all-products/import-dialog/import-dialog.component';
import {ExportDialogComponent} from '../all-products/export-dialog/export-dialog.component';
import {ViewProductsDialogComponent} from './view-products-dialog/view-products-dialog.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(public dialog: MatDialog,public route: Router) { }

  ngOnInit() {
  }

  openViewProductsDialog(){
    this.route.navigate(['/vendor/products/all'])
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
