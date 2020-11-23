import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-landing',
  templateUrl: './product-landing.component.html',
  styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingComponent implements OnInit {

  imagesList : any = [
    "../../../assets/images/product1.jpg",
    "../../../assets/images/product2.jpg",
    "../../../assets/images/product3.jpg",
    "../../../assets/images/product4.jpg",
    "../../../assets/images/product5.jpg",
  ]
  selected_image:string = "../../../assets/images/product1.jpg";
  stars: number[] = [1, 2, 3, 4, 5];

  selectedValue=4;

  constructor() { }

  ngOnInit() {
  }

  selectImage(id){
    this.selected_image = this.imagesList[id]; 
  }

}
