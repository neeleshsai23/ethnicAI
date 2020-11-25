import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {

  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger })
  autoComplete: MatAutocompleteTrigger;

  filterToggle: boolean = false;
  myControl = new FormControl();
  options: string[] = ['Product1', 'Product2', 'Product3','Product4','Product5','Product6','Product7','Product8','Product9','Product10','Product11','Product12','Product13','Product14'];
  values:any = [
    {sku:"123-456",name:"Khadi Kurta",consumption:50,estimated:20,alert:true,status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",consumption:50,estimated:20,alert:true,status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",consumption:50,estimated:20,alert:false,status:"Inactive"},
    {sku:"123-456",name:"Khadi Kurta",consumption:50,estimated:20,alert:true,status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",consumption:50,estimated:20,alert:false,status:"Active"}
  ]
  constructor() { }

  filteredOptions: Observable<string[]>;
  scrollEvent = (event: any): void => {
    if(this.autoComplete.panelOpen)
      // this.autoComplete.closePanel();
      this.autoComplete.updatePosition();
};

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
