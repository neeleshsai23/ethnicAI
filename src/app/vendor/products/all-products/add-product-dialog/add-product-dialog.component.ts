import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>) { }

  ngOnInit() {
  }

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

  close(): void{
    this.dialogRef.close();
  }
}
