import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vendor-orders-dashboard',
  templateUrl: './vendor-orders-dashboard.component.html',
  styleUrls: ['./vendor-orders-dashboard.component.scss']
})
export class VendorOrdersDashboardComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  exitOrderDashboard(value:boolean){
    this.newItemEvent.emit(value);
  }

}
