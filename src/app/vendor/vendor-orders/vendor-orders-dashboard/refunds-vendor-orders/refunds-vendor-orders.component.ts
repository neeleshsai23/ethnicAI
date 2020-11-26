import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refunds-vendor-orders',
  templateUrl: './refunds-vendor-orders.component.html',
  styleUrls: ['./refunds-vendor-orders.component.scss']
})
export class RefundsVendorOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values:any =[
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Return",rstatus:"Dispatch",refund:"Approved",status:"Active"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Return",rstatus:"Dispatch",refund:"Approved",status:"Active"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Cancel",rstatus:"Collected",refund:"Approved",status:"Inactive"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Return",rstatus:"Dispatch",refund:"Rejected",status:"Active"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Cancel",rstatus:"Submitted",refund:"Rejected",status:"Inactive"},
  ]

}
