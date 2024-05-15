import { Component } from '@angular/core';
import { TasksService } from './core/tasks.service';
import { Tasks } from './core/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
constructor(private _TasksService:TasksService){}
tasksData:Tasks[]=[]
ngOnInit(): void {
  
  this.getTasksForManagaer()
}
getTasksForManagaer(){
  let data = {
    title:'',
    status:'',
    pageSize:10,
    pageNumber:1
  }
  this._TasksService.getTasksForManager(data).subscribe({
    next:res=>{
      console.log(res);
      this.tasksData = res.data
      
    },error:err=>{
      console.log(err);
      
    }
  })
}
}
