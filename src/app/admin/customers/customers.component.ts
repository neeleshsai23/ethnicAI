import { AddCustomerComponent } from './add-customer/add-customer.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  items=[
    {"name":"Robert","email":"robert@ethnic.com","phone":"9989889797","address":"1-3/5,plot-123,kukatpally","suite":"-","city":"Hyderabad","country":"India","pincode":"500072","orders":"2","status":"Active"},
    {"name":"Ronak","email":"robert2@ethnic.com","phone":"99898345797","address":"1-4/5,plot-123,lbnagar","suite":"-","city":"Hyderabad","country":"India","pincode":"500073","orders":"4","status":"Active"},
    {"name":"Albert","email":"ro4rt@ethnic.com","phone":"994539797","address":"1-3/6,plot-123,uppal","suite":"-","city":"Hyderabad","country":"India","pincode":"500076","orders":"2","status":"Active"},
    {"name":"Parmeet","email":"ro5rt@ethnic.com","phone":"9234889797","address":"1-8/5,plot-123,madhapur","suite":"-","city":"Hyderabad","country":"India","pincode":"500062","orders":"2","status":"Active"},
    {"name":"Singha","email":"singh@ethnic.com","phone":"9956789797","address":"4-3/5,plot-123,kphb","suite":"-","city":"Hyderabad","country":"India","pincode":"500079","orders":"3","status":"Active"},

  ]

  filterToggle:boolean;
    
    
    



  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  public onSelect(event) {
    console.log(event);
  }
  public openvendorDialog() {
    let dialogRef = this.dialog.open(AddCustomerComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

}
