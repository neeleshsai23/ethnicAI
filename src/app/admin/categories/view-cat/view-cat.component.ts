import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.scss']
})
export class ViewCatComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<ViewCatComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
