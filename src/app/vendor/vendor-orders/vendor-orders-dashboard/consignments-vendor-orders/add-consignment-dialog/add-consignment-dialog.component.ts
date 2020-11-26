import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-consignment-dialog',
  templateUrl: './add-consignment-dialog.component.html',
  styleUrls: ['./add-consignment-dialog.component.scss']
})
export class AddConsignmentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddConsignmentDialogComponent>) { }

  ngOnInit() {
  }

  close() : void{
    this.dialogRef.close();
  }

}
