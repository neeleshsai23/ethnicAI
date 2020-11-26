import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-vendor-orders',
  templateUrl: './items-vendor-orders.component.html',
  styleUrls: ['./items-vendor-orders.component.scss']
})
export class ItemsVendorOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values:any =[
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",inventory:"230",tickets:"2",gift:"Yes"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",inventory:"230",tickets:"2",gift:"Yes"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",inventory:"230",tickets:"2",gift:"No"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",inventory:"230",tickets:"2",gift:"Yes"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",inventory:"230",tickets:"2",gift:"No"},
    

  ]

}
