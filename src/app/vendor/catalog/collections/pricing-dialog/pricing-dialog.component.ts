import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-pricing-dialog',
  templateUrl: './pricing-dialog.component.html',
  styleUrls: ['./pricing-dialog.component.scss']
})
export class PricingDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PricingDialogComponent>) { }

  ngOnInit() {
  }

  close():void{
    this.dialogRef.close()
  }

  values: any = [
    {country:"AUS",currency:"AUS $",price:""},
    {country:"CAN",currency:"CAN $",price:""},
    {country:"UAE",currency:"Dirham",price:""},
    {country:"UK",currency:"£",price:""},
    {country:"USA",currency:"US $",price:""}
  ]

}
