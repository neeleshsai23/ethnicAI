import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-features-dialog',
  templateUrl: './features-dialog.component.html',
  styleUrls: ['./features-dialog.component.scss']
})
export class FeaturesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FeaturesDialogComponent>) { }

  ngOnInit() {
  }

  values:any = [
    {serial:"10789",features:"Hand Woven Fabric"},
    {serial:"34789",features:"Light Weight Fabric"}
  ]

  close():void{
    this.dialogRef.close()
  }
}
