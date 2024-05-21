import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsTableService {

  constructor(private _HttpClient:HttpClient) { }

  getProjectsForEmployee(myParam:any):Observable<any>{ //make interface
    return this._HttpClient.get('Project/employee', {
      params: myParam,
    })
   }

}
