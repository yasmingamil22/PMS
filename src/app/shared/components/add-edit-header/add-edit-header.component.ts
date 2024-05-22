import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-header',
  templateUrl: './add-edit-header.component.html',
  styleUrls: ['./add-edit-header.component.scss']
})
export class AddEditHeaderComponent {
  projectID: any;
  constructor(private _ActivatedRoute: ActivatedRoute) {
    this.projectID = this._ActivatedRoute.snapshot.params['id'];

  }
  //? Input property to receive the Main Text header 
  @Input() textHeader!: string;



  //? Input property to receive the Main Text Btn header
  @Input() mainTxTHeaderLink!: string;

  @Input() toDynamicPath!: string;

}
