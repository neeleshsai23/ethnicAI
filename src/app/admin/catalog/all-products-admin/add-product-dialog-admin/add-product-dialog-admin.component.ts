import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-product-dialog-admin',
  templateUrl: './add-product-dialog-admin.component.html',
  styleUrls: ['./add-product-dialog-admin.component.scss']
})
export class AddProductDialogAdminComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<AddProductDialogAdminComponent>) { }

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
