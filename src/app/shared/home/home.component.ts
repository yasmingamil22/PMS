import { Component } from '@angular/core';
import { HelperService } from 'src/app/core/services/helper.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

chart: any = [];
tasksCount:any;
usersCount:any;
userName = localStorage.getItem('userName');
projectsCount = localStorage.getItem('projectsCount')
tasksNumber = localStorage.getItem('tasksNumber')
userRole = localStorage.getItem('userRole');


constructor(private _HelperService:HelperService) { }

ngOnInit(): void {
  this.getTasksCount()
  this.getUsersCount()
}

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
getUsersCount(){
  this._HelperService.onGetUsresCount().subscribe({
    next: (res)=>{
     // console.log(res);
      this.usersCount=res

    }, error: (err)=>{
      console.log(err);

    }, complete: ()=>{}
  })
}



}
