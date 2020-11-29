import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  showCreateDiscount: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  exitCreateDiscount(){
    this.showCreateDiscount = false;
  }

}
