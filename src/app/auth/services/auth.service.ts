import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
// import { decoded } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }
ngOnInit(): void {

  if(localStorage.getItem('tokenOfUserr')!==null){
    this.tokenDecodeInfo()
   this.getRole()
  }
}
role :string| any = ''
tokenDecodeInfo(){
  let encoded:any = localStorage.getItem('tokenOfUserr')
  let decoded:any = jwtDecode(encoded)
  localStorage.setItem('userRole',decoded.userGroup)
  localStorage.setItem('userName',decoded.userName)
  this.getRole()
}

getRole(){
  if(localStorage.getItem('tokenOfUserr')!==null&&localStorage.getItem('userRole')!==null){
    this.role = localStorage.getItem('userRole')
    console.log(this.role);
    
  }
}

  currentUser():Observable<any> {
    return this._HttpClient.get('Users/currentUser');
  }

  registerUser(data: FormData):Observable<any> {
    return this._HttpClient.post('Users/Register', data)
  }

  verifyAcc(data: FormGroup): Observable<any> {
    return this._HttpClient.put('Users/verify', data)
  }


}