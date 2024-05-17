import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-edit-header',
  templateUrl: './add-edit-header.component.html',
  styleUrls: ['./add-edit-header.component.scss']
})
export class AddEditHeaderComponent {
  constructor() { }
  //? Input property to receive the Main Text header 
  @Input() mainTextHeader!: string;

  //? Input property to receive the Main Text Btn header
  @Input() mainTxTHeaderLink!: string;
}
