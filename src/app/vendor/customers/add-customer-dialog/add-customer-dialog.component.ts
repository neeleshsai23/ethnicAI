import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.scss']
})
export class AddCustomerDialogComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  exitShowAddCustomer(value:boolean){
    this.newItemEvent.emit(value)
  }

}
