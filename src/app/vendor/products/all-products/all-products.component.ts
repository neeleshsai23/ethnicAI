import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material';

import {AddProductDialogComponent} from './add-product-dialog/add-product-dialog.component';
import {ImportDialogComponent} from './import-dialog/import-dialog.component';
import {ExportDialogComponent} from './export-dialog/export-dialog.component';
import { CoalescingComponentFactoryResolver } from 'src/app/coalescing-component-factory-resolver.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(public dialog: MatDialog,coalescingResolver: CoalescingComponentFactoryResolver,
    localResolver: ComponentFactoryResolver) {
      coalescingResolver.registerResolver(localResolver);
     }

  ngOnInit() {
  }
  selected =1;
  showAddProduct = false;
  clicked=false;

  clickedBox(){
    this.clicked = true;
  }

  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  openAddProductDialog(){
    this.dialog.open(AddProductDialogComponent,{
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
