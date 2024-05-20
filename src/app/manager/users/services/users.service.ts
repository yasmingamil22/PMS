import { IEmployee } from './../models/users';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userName=new BehaviorSubject('');
  userImg=new BehaviorSubject('');
  userEmail=new BehaviorSubject('');


constructor(private _HttpClient:HttpClient) { }

// getAllUsers
getUsers(params:any):Observable<any> {
  return this._HttpClient.get('Users' , {params:params});
}
//  Block & Non-Block
 activateUser(id:number):Observable<any>{
  return this._HttpClient.put(`Users/${id}`, {});
 }
// Get User By Id
onGetUserById(id: number): Observable<any> {
  return this._HttpClient.get(`Users/${id}`);
}

getCurrentUser(): Observable<IEmployee> {
  return this._HttpClient.get<IEmployee>(`Users/currentUser`);
}

updateProfile(myData:FormData): Observable<IEmployee> {
  return this._HttpClient.put<IEmployee>(`Users`,myData);
}


}
