import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCollectionDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close()
  }

}
