import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { MatDialog} from '@angular/material';
import {AddPhysicalDialogComponent} from './add-physical-dialog/add-physical-dialog.component';
@Component({
  selector: 'app-physical',
  templateUrl: './physical.component.html',
  styleUrls: ['./physical.component.scss']
})
export class PhysicalComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

  @ViewChild('autoCompleteInput', { read: MatAutocompleteTrigger })
  autoComplete: MatAutocompleteTrigger;

  filterToggle: boolean = false;
  myControl = new FormControl();
  options: string[] = ['Product1', 'Product2', 'Product3','Product4','Product5','Product6','Product7','Product8','Product9','Product10','Product11','Product12','Product13','Product14'];
  values:any = [
    {sku:"123-456",name:"Khadi Kurta",balance:"400",consumption:"55",closing:"345",status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",balance:"400",consumption:"55",closing:"345",status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",balance:"400",consumption:"55",closing:"345",status:"Inactive"},
    {sku:"123-456",name:"Khadi Kurta",balance:"400",consumption:"55",closing:"345",status:"Active"},
    {sku:"123-456",name:"Khadi Kurta",balance:"400",consumption:"55",closing:"345",status:"Active"}
  ]
  constructor(public dialog: MatDialog) { }

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

  openAddPhysicalDialog(){
    this.dialog.open(AddPhysicalDialogComponent,{
      width:"600px",
      height:"auto"
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
