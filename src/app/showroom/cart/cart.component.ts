import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue=4;

  constructor() { }

  ngOnInit() {
  }

}
