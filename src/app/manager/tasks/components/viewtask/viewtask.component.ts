import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Tasks } from '../../core/tasks';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss']
})
export class ViewtaskComponent {
constructor(@Inject(DIALOG_DATA) public data: Tasks,public _DialogRef:DialogRef){
  
}

}
