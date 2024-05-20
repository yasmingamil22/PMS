import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private _HttpClient: HttpClient,) { }

  getManagerProject(myData: any): Observable<any> {
    return this._HttpClient.get('Project/manager', { params: myData })

  }
  addManagerProject(formData: FormGroup): Observable<any> {
    return this._HttpClient.post('Project', formData)
  }


  editManagerProject(id: number, formData: FormGroup): Observable<any> {
    return this._HttpClient.put(`Project/${id}`, formData)
  }

  getProjectById(id: number): Observable<any> {
    return this._HttpClient.get(`Project/${id}`)
  }

  deleteManagerProject(id: number): Observable<any> {
    return this._HttpClient.delete(`Project/${id}`)
  }
}
