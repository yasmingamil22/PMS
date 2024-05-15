import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjects } from '../interface/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _HttpClient: HttpClient,) { }

  getManagerProject(myData: any): Observable<any> {
    return this._HttpClient.get('Project/manager', { params: myData })

  }
}
