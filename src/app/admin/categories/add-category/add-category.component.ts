import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
 

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>) { }

  ngOnInit() {
  }
  
  close(): void {
    this.dialogRef.close();
  }


}
