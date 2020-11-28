import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.scss']
})
export class ReconciliationComponent implements OnInit {

  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger })
  autoComplete: MatAutocompleteTrigger;

  filterToggle: boolean = false;
  myControl = new FormControl();
  options: string[] = ['Product1', 'Product2', 'Product3','Product4','Product5','Product6','Product7','Product8','Product9','Product10','Product11','Product12','Product13','Product14'];
  values:any = [
    {sku:"123-456",name:"Khadi Kurta",vob:"500",pob:"490",vc:"300",pc:"340",vcb:"200",pcb:"150",variance:"50",status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",vob:"500",pob:"490",vc:"300",pc:"340",vcb:"200",pcb:"150",variance:"50",status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",vob:"500",pob:"490",vc:"300",pc:"340",vcb:"200",pcb:"150",variance:"50",status:"Inactive"},
    {sku:"123-456",name:"Khadi Kurta",vob:"500",pob:"490",vc:"300",pc:"340",vcb:"200",pcb:"150",variance:"50",status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",vob:"500",pob:"490",vc:"300",pc:"340",vcb:"200",pcb:"150",variance:"50",status:"Active"}
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