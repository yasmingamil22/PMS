import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService , private _Router:Router){
    
  }
  hide = true;
  loading:boolean = false
  loginForm:FormGroup = this._FormBuilder.group({
    email:['',[Validators.required]],
    password:['',Validators.required]

  })
  hanldeLogin(){
    if(!this.loading){
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
        },
        complete:()=>{
        this._Router.navigate(['/dashboard']);
        }
      })
    }
  }
}
