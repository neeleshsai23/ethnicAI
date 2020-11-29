import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-export-orders-dialog',
  templateUrl: './export-orders-dialog.component.html',
  styleUrls: ['./export-orders-dialog.component.scss']
})
export class ExportOrdersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExportOrdersDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close();
  }

}
