import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {CreateCollectionDialogComponent} from './create-collection-dialog/create-collection-dialog.component';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  showCreateCollection: boolean = false;

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  exitCreateCollection(){
    this.showCreateCollection = false;
  }

  openCreateCollectionDialog(){
    this.dialog.open(CreateCollectionDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

}
