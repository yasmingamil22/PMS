import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { iChangePassword } from 'src/app/auth/auth';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/
      ),
      Validators.required,
    ]),
    newPassword: new FormControl('', [
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/
      ),
      Validators.required,
    ]),
    confirmNewPassword: new FormControl('',
      [RxwebValidators.compare({fieldName:'newPassword'}),
      Validators.required,
    ]),
  });

  hideOld: boolean = true;
  hideNew: boolean = true;
  hideConfirm: boolean = true;

  constructor( private _AuthService: AuthService, private _Router: Router,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: iChangePassword,
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }


  onChangePassword(data: FormGroup) {
    this._AuthService.changePassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
      complete: () => {
        //toaster
        this.onNoClick();
      },
    });
  }
}
