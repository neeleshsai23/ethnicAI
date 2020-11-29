import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-collection-dialog',
  templateUrl: './create-collection-dialog.component.html',
  styleUrls: ['./create-collection-dialog.component.scss']
})
export class CreateCollectionDialogComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  selected=1;

  constructor() { }

  ngOnInit() {
  }

  exitCreateCollection(value:boolean){
    this.newItemEvent.emit(value)
  }

}
