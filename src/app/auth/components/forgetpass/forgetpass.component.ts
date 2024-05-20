import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent {
constructor (private _AuthService:AuthService,private _ToastrService:ToastrService,private _FormBuilder:FormBuilder){}
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
      this.pos1=true

      this.loading=false
      this._ToastrService.success(res.message)
    },
    error:err=>{
      this.loading=false
      this._ToastrService.error(err.message)
    }
  })
}
resetForm:FormGroup = this._FormBuilder.group({
  email:['',[Validators.email,Validators.required]],
  password:['',[Validators.required]],
  confirmPassword:['',[RxwebValidators.compare({fieldName:'password'}),Validators.required]],
  seed:['',[Validators.required]]
})
pos1=false
resetPass():void{
  this.loading=true
  this._AuthService.resetPass(this.resetForm.value).subscribe({
    next:res=>{
      this.loading=false
      this._ToastrService.success(res.message)
    },
    error:err=>{
      this.loading=false
      this._ToastrService.error(err.message)
    }
  })
}
}
