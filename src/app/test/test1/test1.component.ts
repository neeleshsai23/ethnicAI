import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

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
