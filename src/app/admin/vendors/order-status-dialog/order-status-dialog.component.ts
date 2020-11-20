import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-order-status-dialog',
  templateUrl: './order-status-dialog.component.html',
  styleUrls: ['./order-status-dialog.component.scss']
})
export class OrderStatusDialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<OrderStatusDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close();
  }

}
