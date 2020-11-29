import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-import-customers-dialog',
  templateUrl: './import-customers-dialog.component.html',
  styleUrls: ['./import-customers-dialog.component.scss']
})
export class ImportCustomersDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ImportCustomersDialogComponent>) { }

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
