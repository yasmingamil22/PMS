import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

constructor(private _HttpClient:HttpClient) { }

getTasksForManager(data:any):Observable<any>{
 return this._HttpClient.get('Task/manager',{params:data})
}
}
