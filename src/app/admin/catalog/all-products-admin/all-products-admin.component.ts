import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {ExportDialogComponent} from './export-dialog/export-dialog.component';
import {ImportDialogComponent} from './import-dialog/import-dialog.component';
import {AddProductDialogAdminComponent} from './add-product-dialog-admin/add-product-dialog-admin.component';

@Component({
  selector: 'app-all-products-admin',
  templateUrl: './all-products-admin.component.html',
  styleUrls: ['./all-products-admin.component.scss']
})
export class AllProductsAdminComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openAddProductDialog(){
    this.dialog.open(AddProductDialogAdminComponent,{
      width:"700px",
      height:"auto"
    })
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
