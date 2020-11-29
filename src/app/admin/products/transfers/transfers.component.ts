import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {AddTransferDialogComponent} from './add-transfer-dialog/add-transfer-dialog.component';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

  showAddTransfer:boolean = false;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddTransferDialog(){
    this.dialog.open(AddTransferDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  exitAddTransfer(){
    this.showAddTransfer = false;
  }

}
