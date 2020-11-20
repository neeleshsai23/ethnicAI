import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {CountriesDialogComponent} from './countries-dialog/countries-dialog.component';
import {GridColumnsDialogComponent} from './grid-columns-dialog/grid-columns-dialog.component';
import {OnboardVendorDialogComponent} from './onboard-vendor-dialog/onboard-vendor-dialog.component';
import {OrderStatusDialogComponent} from './order-status-dialog/order-status-dialog.component';
import {ProductCategoriesDialogComponent} from './product-categories-dialog/product-categories-dialog.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  values:any = [
    {support:3,vendor:"Mangatrai",group:"Group1",name:"Joana Doe",number:"987654321",email:"Joana.d@gmail.com",gst:"GST1234",countries:4,categories:12,products:70,statuses:4,status:"Active"},
    {support:5,vendor:"Mangatrai",group:"Group2",name:"Joana Doe",number:"987654321",email:"Joana.d@gmail.com",gst:"GST1234",countries:4,categories:12,products:70,statuses:4,status:"Inactive"},
    {support:4,vendor:"Mangatrai",group:"Group3",name:"Joana Doe",number:"987654321",email:"Joana.d@gmail.com",gst:"GST1234",countries:4,categories:12,products:70,statuses:4,status:"Active"},
    {support:3,vendor:"Mangatrai",group:"Group4",name:"Joana Doe",number:"987654321",email:"Joana.d@gmail.com",gst:"GST1234",countries:4,categories:12,products:70,statuses:4,status:"Blacklisted"},
    {support:2,vendor:"Mangatrai",group:"Group5",name:"Joana Doe",number:"987654321",email:"Joana.d@gmail.com",gst:"GST1234",countries:4,categories:12,products:70,statuses:4,status:"Active"}
  ]

  openGridColumnsDialog(){
    let dialogRef = this.dialog.open(GridColumnsDialogComponent,{
      width:"700px",
      height:"auto"
    })

    
  }

  openVendorDialog(){
    let dialogRef = this.dialog.open(OnboardVendorDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openCountriesDialog(){
    let dialogRef = this.dialog.open(CountriesDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openCategoriesDialog(){
    let dialogRef = this.dialog.open(ProductCategoriesDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  openStatusesDialog(){
    let dialogRef = this.dialog.open(OrderStatusDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
