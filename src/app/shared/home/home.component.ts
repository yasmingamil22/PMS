import { Component } from '@angular/core';
import { HelperService } from 'src/app/core/services/helper.service';
import Chart from 'chart.js/auto';
import { Tasks } from 'src/app/manager/tasks/core/tasks';
import { TasksService } from 'src/app/manager/tasks/core/tasks.service';
import { ProjectsService } from 'src/app/manager/projects/services/projects.service';
import { IProjectData, IProjectParams } from 'src/app/manager/projects/interface/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projectList: IProjectData = {
    pageNumber: 0,
    pageSize: 0,
    data: [],
    totalNumberOfPages: 0,
    totalNumberOfRecords: 0,
  }
chart: any = [];
tasksCount:any;
usersCount:any;
userName = localStorage.getItem('userName');
projectsCount:any;
userRole = localStorage.getItem('userRole');
tasksNumber:any;
status:string = ''
title:string = ''
tasksData:Tasks[]=[]
pageSize:number = 10
pageNumber:number = 1
total:number=0
projectTitle: string = '';

constructor(private _HelperService:HelperService , private _TasksService:TasksService
  , private _ProjectsService:ProjectsService) { }

ngOnInit(): void {
  this.getTasksCount()
  this.getUsersCount()
  this.getTasksForManagaer()
  this.onGetManagerProjects()
}

// Projects Number
onGetManagerProjects() {
  let params: IProjectParams = {
    
    pageSize: this.pageSize,
    pageNumber: this.pageNumber,
  };
  this._ProjectsService.getManagerProject(params).subscribe({
    next: (res) => {
      this.projectList = res
     this.projectsCount = this.projectList.totalNumberOfRecords;
    },
    error: (error) =>{},
    complete: () => {
    }
  })
}
// Tasks Number
getTasksForManagaer(){
  let data = {
    title:this.title,
    status:this.status,
    pageSize:this.pageSize,
    pageNumber:this.pageNumber
  }
  this._TasksService.getTasksForManager(data).subscribe({
    next:res=>{
      this.tasksData = res.data
      this.total = res.totalNumberOfRecords
      this.tasksNumber =  this.total;
    //  localStorage.setItem('tasksNumber',JSON.stringify(res.totalNumberOfRecords))
    },error:err=>{
     // console.log(err);
    }
  })
}
// Tasks Status
getTasksCount(){
  this._HelperService.onGetTasksCount().subscribe({
    next: (res)=>{
    // console.log(res);
      this.tasksCount = res;
     
    }, error: (err)=>{
      console.log(err);
    }, complete: ()=>{
      this.chart = new Chart('status', {
        type: 'doughnut',
        data: {
          labels: [
            'To Do','In Progress','Done'],
          datasets: [{
            label: 'My First Dataset',
            data: [this.tasksCount?.toDo, this.tasksCount?.inProgress, this.tasksCount?.done],
            backgroundColor: ['#CE93D8','#EF9B28A3','#009247'],
            hoverOffset: 4
          }]
        }
      })
    }
  })
}
// User Count (Active & Not-Active)
getUsersCount(){
  this._HelperService.onGetUsresCount().subscribe({
    next: (res)=>{
     // console.log(res);
      this.usersCount=res

    }, error: (err)=>{
      console.log(err.error.message);
    }, complete: ()=>{}
  })
}



}
