import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

constructor(private _HttpClient:HttpClient) { }

onGetTasksCount():Observable<any>
  {
    return this._HttpClient.get('Task/count')
  }
  onGetUsresCount():Observable<any>
  {
    return this._HttpClient.get('Users/count')
  }

}
