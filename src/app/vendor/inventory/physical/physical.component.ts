import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-physical',
  templateUrl: './physical.component.html',
  styleUrls: ['./physical.component.scss']
})
export class PhysicalComponent implements OnInit {
  @ViewChild('fileInput')
  fileInput;

  file: File | null = null;

  

  constructor() { }

  ngOnInit() {
  }

  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
  }

}
