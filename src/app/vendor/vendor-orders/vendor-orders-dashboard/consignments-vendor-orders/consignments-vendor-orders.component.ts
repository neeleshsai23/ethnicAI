import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddConsignmentDialogComponent} from './add-consignment-dialog/add-consignment-dialog.component';

@Component({
  selector: 'app-consignments-vendor-orders',
  templateUrl: './consignments-vendor-orders.component.html',
  styleUrls: ['./consignments-vendor-orders.component.scss']
})
export class ConsignmentsVendorOrdersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  values:any = [
    {name:"Kurtis",items:"3",ostatus:"Received",date:"22-11-2019",amount:"23",status:"Active"},
    {name:"Kurtis",items:"3",ostatus:"Processed",date:"22-11-2019",amount:"23",status:"Active"},
    {name:"Kurtis",items:"3",ostatus:"Dispatched",date:"22-11-2019",amount:"23",status:"Inactive"},
    {name:"Kurtis",items:"3",ostatus:"En Route",date:"22-11-2019",amount:"23",status:"Active"},
    {name:"Kurtis",items:"3",ostatus:"Delivered",date:"22-11-2019",amount:"23",status:"Active"}
  ]

  openAddConsignmentDialog(){
    this.dialog.open(AddConsignmentDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
