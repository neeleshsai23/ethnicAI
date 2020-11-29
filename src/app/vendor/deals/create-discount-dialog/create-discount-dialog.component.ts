import { Component, OnInit,EventEmitter,Output,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-discount-dialog',
  templateUrl: './create-discount-dialog.component.html',
  styleUrls: ['./create-discount-dialog.component.scss']
})
export class CreateDiscountDialogComponent implements OnInit {

  @ViewChild('limit') limit:ElementRef;
  @ViewChild('endDate') endDate:ElementRef;
  @Output() newItemEvent = new EventEmitter<boolean>();

  showInputLimit = false;
  showEndDate = false;
  constructor() { }

  ngOnInit() {
  }

  showLimit(){
    if(this.limit.nativeElement.checked){
      this.showInputLimit = true;
    }
    else{
      this.showInputLimit = false;
    }
  }

  showDate(){
    if(this.endDate.nativeElement.checked){
      this.showEndDate = true;
    }else{
      this.showEndDate = false;
    }
  }

  exitCreateDiscount(value:boolean){
    this.newItemEvent.emit(value);
  }

}
