import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { decoded } from '../auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient) { }
  ngOnInit(): void {
    if (localStorage.getItem('tokenOfUserr')!== null) {
      this.tokenDecodeInfo()
    }
  }
  role: any = ''
  tokenDecodeInfo() {
    let encoded: any = localStorage.getItem('tokenOfUserr')
    let decoded: decoded = jwtDecode(encoded)
    localStorage.setItem('userRole', decoded.userGroup)
    localStorage.setItem('userName', decoded.userName)
    this.getRole()
  }
  getRole() {
    if (localStorage.getItem('tokenOfUserr')!== null && localStorage.getItem('userRole')!== null) {
      this.role = localStorage.getItem('userRole')
    }
  }
  loginUser(data: FormGroup): Observable<any> {
    return this._HttpClient.post('Users/Login', data)
  }

  currentUser(): Observable<any> {
    return this._HttpClient.get('Users/currentUser');
  }

  registerUser(data: FormData): Observable<any> {
    return this._HttpClient.post('Users/Register', data)
  }
  verifyAcc(data: FormGroup): Observable<any> {
    return this._HttpClient.put('Users/verify', data)
  }
  verifyPass(emaiValue:string):Observable<any>{
    return this._HttpClient.post('Users/Reset/Request',{email:emaiValue})
  }
  resetPass(data:object):Observable<any>{
    return this._HttpClient.post('Users/Reset',data)
  }
}
