import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.columnRepeat = Math.floor(this.innerWidth / this.imageWidth);
    this.rowRepeat = Math.floor(this.innerHeight/ this.imageHeight)/2;
    this.createImageArray();
    this.createFlemishPattern();
  }

  innerWidth:number;
  innerHeight:number;
  imageHeight:number = 100;
  imageWidth:number = 50;
  columnRepeat:number;
  rowRepeat:number;
  columnImages:string[] = [];
  rowImages:string[] = [];
  flemishColumn:object[] = [];
  flemishrow:string[] = [];
  


  imageSource:string = "https://image.shutterstock.com/image-photo/old-red-brick-isolated-on-260nw-433584265.jpg";

  createImageArray(){
    let i=0,j=0;
    while(i<this.columnRepeat){
      this.columnImages.push(this.imageSource);
      i++;
    }
    while(j<this.rowRepeat){
      this.rowImages.push(this.imageSource);
      j++;
    }
  }

  createFlemishPattern(){
    let i=0,j=0;
    while(i<this.columnRepeat){
      this.flemishColumn.push({id:i,image:this.imageSource});
      i++;
    }
    while(j<this.rowRepeat){
      this.rowImages.push(this.imageSource);
      j++;
    }
  }

}
