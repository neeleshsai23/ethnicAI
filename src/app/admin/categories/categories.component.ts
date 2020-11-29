import { AddCategoryComponent } from './add-category/add-category.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ViewCatComponent } from './view-cat/view-cat.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  items=[
    {"category":"Trousers","description":"This are bottom wear clothing","subcat":"5","status":"Active"},
    {"category":"Shirts","description":"This are top wear clothing","subcat":"5","status":"Active"},
    {"category":"Jackets","description":"This are winter wear clothing","subcat":"6","status":"Inactive"},
    {"category":"Footwear","description":"This are footwear","subcat":"5","status":"Inactive"},
    {"category":"Kurtis","description":"This are full body clothing ","subcat":"6","status":"Active"},
    ]
    
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openCollectionDialog(){
    this.dialog.open(AddCategoryComponent,{
      width:"600px",
      height:"auto"
    })
  }

  opensubcat(){
    this.dialog.open(ViewCatComponent,{
      width:"600px",
      height:"auto"
    })
  }
}
