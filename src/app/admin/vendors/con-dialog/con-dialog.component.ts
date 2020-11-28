import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-con-dialog',
  templateUrl: './con-dialog.component.html',
  styleUrls: ['./con-dialog.component.scss']
})
export class ConDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConDialogComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}

