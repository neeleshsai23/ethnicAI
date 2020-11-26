import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns-vendor-orders',
  templateUrl: './returns-vendor-orders.component.html',
  styleUrls: ['./returns-vendor-orders.component.scss']
})
export class ReturnsVendorOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values:any = [
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"Confirmed"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"Processes"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"Dispatched"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"En Route"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"Delivered"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"Cacelled"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged",stage:"Returned"},

  ]

}
