import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../verify/verify.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService,private _ToastrService:ToastrService,public dialog: MatDialog ){}
  hide = true;
  hide2 = true;
  files: File[] = [];
  imgUrl:any
  loading:boolean = false

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string ,email:string): void {
    this.dialog.open(VerifyComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:email
    });
  }
  

registerForm:FormGroup = this._FormBuilder.group({
  userName:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  country:['',[Validators.required]],
  phoneNumber:['',[Validators.required,Validators.pattern(/^(002)?01[0125][0-9]{8}$/)]],
  password:['',[Validators.required,Validators.pattern(/^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.\W)(?!.* ).{6,16}$/)]],
  confirmPassword:['',[RxwebValidators.compare({fieldName:'password'}),Validators.required]]
})
email:string=''
handleRegister(){
  let formdata = new FormData()
  Object.entries(this.registerForm.value).forEach(([key, value]:any) => {
    formdata.append(`${key}`,value)
  });
  formdata.append('profileImage',this.imgUrl)
 if(!this.loading){
  this.loading = true
  this._AuthService.registerUser(formdata).subscribe({
    next:res=>{
      this.openDialog('700ms','350ms',this.email)
      this.loading=false
      console.log(res);
      this.loading = false
      this._ToastrService.success(res.message)
    },
    error:err=>{
      this.loading = false
      console.log(err);
      this._ToastrService.error(err.error.message)
      
    }
  })
 }
}
onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
  this.imgUrl = this.files[0]
}
onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

}
