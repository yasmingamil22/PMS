import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

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


}
