import { AuthService } from './../../../auth/services/auth.service';
import { IMenu } from './../../../core/models/global';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private _AuthService:AuthService){}

isManager():boolean{
 return this._AuthService.role == 'Manager'? true : false ;
} 

isEmployee():boolean{
  return this._AuthService.role == 'Employee'? true : false ;
 } 

menu:IMenu[] = [
  {
  text:'Users' ,
  icon: 'fa-solid fa-user-group' ,
  link:'/dashboard/manager/users',
  isActive: true,
  } ,
  {
    text:'Projects' ,
    icon: 'fa-solid fa-table-cells-large' ,
    link:'dashboard/manager/projects',
    isActive: true,
    } ,
    {
      text:'Tasks' ,
      icon: 'fa-solid fa-list-check' ,
      link:'dashboard/manager/tasks',
      isActive: true,
      } ,
      {
        text:'User Projects' ,
        icon: 'fa-solid fa-table-cells-large' ,
        link:'dashboard/employee/projects',
        isActive: this.isEmployee(),
        } ,
        {
          text:'User Task' ,
          icon: 'fa-solid fa-list-check' ,
          link:'dashboard/employee/task',
          isActive: this.isEmployee(),
          } ,
]


}
