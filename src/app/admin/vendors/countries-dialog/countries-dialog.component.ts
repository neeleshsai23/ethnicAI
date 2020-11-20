import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-countries-dialog',
  templateUrl: './countries-dialog.component.html',
  styleUrls: ['./countries-dialog.component.scss']
})
export class CountriesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CountriesDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close();
  }

}
