import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddCollectionDialogComponent} from './add-collection-dialog/add-collection-dialog.component';
import {FeaturesDialogComponent} from './features-dialog/features-dialog.component';
import {PricingDialogComponent} from './pricing-dialog/pricing-dialog.component';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  values: any = [
    {sku:"#1234",category:"Category1",product:"Oxidises Necklace",features:3,pricing:3,inventory:360,images:3,status:"Active"},
    {sku:"#9087",category:"Category1",product:"Earrings Set",features:5,pricing:4,inventory:500,images:4,status:"Inactive"},
    {sku:"#9865",category:"Category1",product:"Kurti & Pallazo",features:5,pricing:3,inventory:100,images:"Add",status:"Active"},
    {sku:"#3456",category:"Category1",product:"Kurti & Pallazo",features:5,pricing:3,inventory:100,images:"Add",status:"Active"},

  ]

  openCollectionDialog(){
    this.dialog.open(AddCollectionDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openFeaturesDialog(){
    this.dialog.open(FeaturesDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openPricingDialog(){
    this.dialog.open(PricingDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
