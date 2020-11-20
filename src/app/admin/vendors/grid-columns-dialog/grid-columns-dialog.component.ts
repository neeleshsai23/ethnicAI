import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-grid-columns-dialog',
  templateUrl: './grid-columns-dialog.component.html',
  styleUrls: ['./grid-columns-dialog.component.scss']
})
export class GridColumnsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GridColumnsDialogComponent>) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close();
  }

}
