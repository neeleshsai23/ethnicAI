import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-gridview',
  templateUrl: './summary-gridview.component.html',
  styleUrls: ['./summary-gridview.component.scss']
})
export class SummaryGridviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  values:any = [
    {id:"123",name:"Anurag",street:"D-46/2/1b",city:"Hyderabad",state:"Telangana",country:"India",zip:"500090",email:"anurag@gmail.com",mobile:"9888459875",option:"Express",status:"Active"},
    {id:"123",name:"Anurag",street:"D-46/2/1b",city:"Hyderabad",state:"Telangana",country:"India",zip:"500090",email:"anurag@gmail.com",mobile:"9888459875",option:"Normal",status:"Active"},
    {id:"123",name:"Anurag",street:"D-46/2/1b",city:"Hyderabad",state:"Telangana",country:"India",zip:"500090",email:"anurag@gmail.com",mobile:"9888459875",option:"Express",status:"Active"},
    {id:"123",name:"Anurag",street:"D-46/2/1b",city:"Hyderabad",state:"Telangana",country:"India",zip:"500090",email:"anurag@gmail.com",mobile:"9888459875",option:"Normal",status:"Inactive"},
    {id:"123",name:"Anurag",street:"D-46/2/1b",city:"Hyderabad",state:"Telangana",country:"India",zip:"500090",email:"anurag@gmail.com",mobile:"9888459875",option:"Normal",status:"Active"}




  ]

}
