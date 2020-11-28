import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {CreateCollectionDialogComponent} from './create-collection-dialog/create-collection-dialog.component';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openCreateCollectionDialog(){
    this.dialog.open(CreateCollectionDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
