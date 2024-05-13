import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent {
  constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder,private _ToastrService:ToastrService,@Inject(DIALOG_DATA) public data: any,private _Router:Router , public _DialogRef:DialogRef){}
  verfiyForm:FormGroup  = this._FormBuilder.group({
    email:[this.data],
    code:['']
  })
  loading:boolean = false
  verifyEmail(){
    this.loading=true
    this._AuthService.verifyAcc(this.verfiyForm.value).subscribe({
      next:res=>{
        this.loading=false
        this._ToastrService.success(res.message)
        this._Router.navigate(['/auth/login'])
        this._DialogRef.close()
      },
      error:err=>{
        this.loading=false
        this._ToastrService.error(err.message)
      }
    })
  }
}
