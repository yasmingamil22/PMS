import { Router } from '@angular/router';
import { AuthService } from './../../../auth/services/auth.service';
import { IMenu } from './../../../core/models/global';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened:boolean =true;

  constructor(private _AuthService:AuthService , private router:Router){}
  ngOnInit(): void {
  }

isManager():boolean{
 return localStorage.getItem('userRole') == "Manager"? true : false ;
}

isEmployee():boolean{
  return localStorage.getItem('userRole') == "Employee"? true : false ;
 }

menu:IMenu[] = [
  {
    text: 'Home',
    icon: 'fa-solid fa-house',
    link: '/dashboard/manager/home',
    isActive: this.isManager()
  },
  {
  text:'Users' ,
  icon: 'fa-solid fa-user-group' ,
  link:'/dashboard/manager/users',
  isActive: this.isManager(),
  } ,
  {
    text:'Projects' ,
    icon: 'fa-solid fa-table-cells-large' ,
    link:'/dashboard/manager/projects',
    isActive: this.isManager(),
    } ,
    {
      text:'Tasks' ,
      icon: 'fa-solid fa-list-check' ,
      link:'/dashboard/manager/tasks',
      isActive: this.isManager(),
      } ,
      {
        text:'User Projects' ,
        icon: 'fa-solid fa-table-cells-large' ,
        link:'employee/projects',
        isActive: this.isEmployee(),
        } ,
        {
          text:'User Task' ,
          icon: 'fa-solid fa-list-check' ,
          link: '/dashboard/employee/task-board',
          isActive: this.isEmployee(),
          } ,
]

onClicked() {
  this.isOpened = !this.isOpened;
  this.isOpenedValue.emit(this.isOpened);
 // console.log(this.isOpened)
}

}
