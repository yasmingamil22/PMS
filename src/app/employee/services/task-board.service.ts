import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskBoardService {

constructor(private _HttpClient:HttpClient) { }

getAllEmployeeTasks(): Observable<any> {
  return this._HttpClient.get('Task', {params: { pageSize: 1000, pageNumber:1}})
}

}
