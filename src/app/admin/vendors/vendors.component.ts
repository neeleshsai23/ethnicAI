import { ConDialogComponent } from './con-dialog/con-dialog.component';
import { ShowCategoriesComponent } from './show-categories/show-categories.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
MatDialog
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {


  items=[
    {"id":"5T6Y54","vendor":"Adidas","subscription":"Platinum","categories":"6","activation":"11/11/2019","expiry":"13/12/2022","payments":"4","name":"Robert","orders":"3","CON":"3","address":"1-3/5,plot-123,kukatpally","city":"Hyderabad","country":"India","status":"Active"},
    {"id":"5T6I84","vendor":"Nike","subscription":"Platinum","categories":"6","activation":"12/11/2019","expiry":"2/11/2022","payments":"4","name":"Rogger","orders":"4","CON":"3","address":"1-3/5,plot-123,kphb","city":"Hyderabad","country":"India","status":"Active"},
    {"id":"5T7T54","vendor":"Adidas","subscription":"Gold","categories":"6","activation":"14/11/2019","expiry":"6/12/2022","payments":"4","name":"Ramu","orders":"7","CON":"3","address":"5-3/5,plot-123,miyapur","city":"Hyderabad","country":"India","status":"Active"},
    {"id":"5T8U54","vendor":"Louis","subscription":"Platinum","categories":"6","activation":"16/11/2019","expiry":"2/12/2022","payments":"4","name":"Parmeet","orders":"3","CON":"3","address":"6-3/5,plot-123,madhapur","city":"Hyderabad","country":"India","status":"Active"},
    {"id":"5T6Y54","vendor":"Puma","subscription":"Gold","categories":"6","activation":"11/01/2019","expiry":"18/11/2022","payments":"4","name":"Robert","orders":"3","CON":"3","address":"1-8/5,plot-123,hitech-city","city":"Hyderabad","country":"India","status":"Active"},
    ]
    
    




  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  filterToggle:boolean;
  public onSelect(event) {
    console.log(event);
  }
  public openvendorDialog() {
    let dialogRef = this.dialog.open(AddVendorComponent, {
     
        height: 'auto',
        width: '600px'
    });
    dialogRef.afterClosed().subscribe(data => {
    });
}

public opencategories() {
  let dialogRef = this.dialog.open(ShowCategoriesComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

public opencon() {
  let dialogRef = this.dialog.open(ConDialogComponent, {
   
      height: 'auto',
      width: '600px'
  });
  dialogRef.afterClosed().subscribe(data => {
  });
}

}
