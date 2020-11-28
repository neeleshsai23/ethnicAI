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
   {name:"Khadi Kurta",sku:"123-456",categories:3,occasions:3,inventory:300,lastshipped:"22-11-20",brand:"ABC INC",status:"Active"},
   {name:"Khadi Kurta",sku:"123-456",categories:3,occasions:3,inventory:300,lastshipped:"22-11-20",brand:"ABC INC",status:"Inactive"},
   {name:"Khadi Kurta",sku:"123-456",categories:3,occasions:3,inventory:300,lastshipped:"22-11-20",brand:"ABC INC",status:"Active"},
   {name:"Khadi Kurta",sku:"123-456",categories:3,occasions:3,inventory:300,lastshipped:"22-11-20",brand:"ABC INC",status:"Active"}

  ]

  openCollectionDialog(){
    this.dialog.open(AddCollectionDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openFeaturesDialog(){
    this.dialog.open(FeaturesDialogComponent,{
      width:"700px",
      height:"auto"
    })
  }

  openPricingDialog(){
    this.dialog.open(PricingDialogComponent,{
      width:"700px",
      height:"auto"
    })
  }

}
