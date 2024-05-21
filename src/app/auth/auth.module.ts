// import { AuthModule } from './auth.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
// import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { VerifyComponent } from './components/verify/verify.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgxFileDropModule } from 'ngx-file-drop';



@NgModule({
  declarations: [
    // AuthModulehComponent,
    LoginComponent,
    RegisterComponent,
    VerifyComponent,
    ForgetpassComponent,
    AuthComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgxDropzoneModule,
    FormsModule,
    MatFormFieldModule,
    NgxFileDropModule
  ]
})
export class AuthModule { }
