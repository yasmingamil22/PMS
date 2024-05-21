import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-pass',
  templateUrl: './confirm-pass.component.html',
  styleUrls: ['./confirm-pass.component.scss']
})
export class ConfirmPassComponent {

    
  hide:boolean=true;

  constructor(
    public dialogRef: MatDialogRef<ConfirmPassComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }

  passwordForm:FormGroup=new FormGroup({
    confirmPassword:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]),
   

  })

}
