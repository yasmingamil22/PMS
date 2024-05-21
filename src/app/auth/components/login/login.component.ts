import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ForgetpassComponent } from '../forgetpass/forgetpass.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private toastr: ToastrService, private _Router:Router,public dialog: MatDialog){

  }
  hide = true;
  loading:boolean = false
  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]]
  })
  hanldeLogin(){
    if(!this.loading&& this.loginForm.valid){
      this.loading = true
      this._AuthService.loginUser(this.loginForm.value).subscribe({
        next:res=>{
          console.log(res);
          localStorage.setItem('tokenOfUserr',res.token)
          this._AuthService.tokenDecodeInfo()
          this.loading =false
        },
        error:err=>{
          this.loading = false
          console.log(err);

          this.toastr.error(err.error.message)
          
        },
        complete:()=>{
        this._Router.navigate(['/dashboard']);
        }
      })
    }
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ForgetpassComponent, {
      width: '550px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
