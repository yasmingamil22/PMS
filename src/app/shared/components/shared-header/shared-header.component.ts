import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss']
})
export class SharedHeaderComponent {
  constructor() { }
  //? Input property to receive the Main Text header 
  @Input() mainTextHeader!: string;

  //? Input property to receive the Main Text Btn header
  @Input() mainTxTHeaderBtn!: string;

  @Input() toDynamicPath!: string;


}
