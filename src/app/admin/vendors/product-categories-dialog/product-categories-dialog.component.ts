import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-product-categories-dialog',
  templateUrl: './product-categories-dialog.component.html',
  styleUrls: ['./product-categories-dialog.component.scss']
})
export class ProductCategoriesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductCategoriesDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close();
  }

}
