import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-transfer-dialog',
  templateUrl: './add-transfer-dialog.component.html',
  styleUrls: ['./add-transfer-dialog.component.scss']
})
export class AddTransferDialogComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  exitAddTransfer(value:boolean){
    this.newItemEvent.emit(value);
  }

}
