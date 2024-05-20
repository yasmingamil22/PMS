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
getAllusers():Observable<any>{
 return this._HttpClient.get('Users',{params:{pageSize:1000,pageNumber:1}})
}
getAllProjects():Observable<any>{
  return this._HttpClient.get('Project',{params:{pageSize:1000,pageNumber:1}})
}
addTask(data:object):Observable<any>{
  return this._HttpClient.post('Task',data)
}
getTaskById(id:number):Observable<any>{
  return this._HttpClient.get(`Task/${id}`)
}
updateTask(id:number,data:object):Observable<any>{
 return this._HttpClient.put(`Task/${id}`,data)
}
deleteTask(id:number):Observable<any>{
  return this._HttpClient.delete(`Task/${id}`)
}
onDeleteTask(id: number): Observable<any> {
  return this._HttpClient.delete(`Task/${id}`)

}
}
