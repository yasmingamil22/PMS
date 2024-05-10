import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _FormBuilder:FormBuilder){}
  hide = true;
  loginForm:FormGroup = this._FormBuilder.group({
    
  })
}
