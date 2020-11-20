import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-onboard-vendor-dialog',
  templateUrl: './onboard-vendor-dialog.component.html',
  styleUrls: ['./onboard-vendor-dialog.component.scss']
})
export class OnboardVendorDialogComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<OnboardVendorDialogComponent>) { }

  ngOnInit() {
  }

  show_input:boolean = false;

  close():void{
    this.dialogRef.close();
  }

  showInput() {
    // Get the checkbox
    var checkbox = document.getElementById("checkbox") as HTMLInputElement;
    // Get the output text
    var gst = document.getElementById("gst");
  
    // If the checkbox is checked, display the output gst
    if (checkbox.checked == true){
      gst.style.display = "block";
    } else {
      gst.style.display = "none";
    }
  }

}
