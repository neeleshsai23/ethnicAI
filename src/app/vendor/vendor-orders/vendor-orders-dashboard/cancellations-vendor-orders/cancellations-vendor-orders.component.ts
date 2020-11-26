import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellations-vendor-orders',
  templateUrl: './cancellations-vendor-orders.component.html',
  styleUrls: ['./cancellations-vendor-orders.component.scss']
})
export class CancellationsVendorOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values:any = [
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},
    {sku:"1234",name:"Khadi Kurtis",category:"Kurtis",quantity:"2",amount:"23",reason:"Damaged"},

  ]


}
