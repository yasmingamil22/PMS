import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent {
constructor (private _AuthService:AuthService,private _ToastrService:ToastrService,private _FormBuilder:FormBuilder, private _Router:Router){}
pos:boolean=false
email:string=''
loading:boolean=false
hide = true;
hide2 = true;
verifyPass(){
  this.loading=true
  this._AuthService.verifyPass(this.email).subscribe({
    next:res=>{
      this.pos=true

      this.loading=false
      this._ToastrService.success(res.message)
    },
    error:err=>{
      this.loading=false
      this._ToastrService.error(err.error.message)
      console.log(err)
    },
    complete: () => {
      this._Router.navigate(['auth/reset-pass']);
    }
  })
}

requestForm:FormGroup = this._FormBuilder.group({
  email:['',[Validators.email,Validators.required]],
})


sendResetForm(): void {
  const data = this.requestForm.value;

    if (this.requestForm.valid) {
      this._AuthService.onRequestReset(data).subscribe({
        next: (res) => {
          console.log('Password reset successful', res.message);
        },
        error: (err) => {
          console.error('Error resetting password', err);

        },
        complete: () => {
          this._Router.navigate(['auth/reset-pass']);
        }
      });
    }

  }

}
