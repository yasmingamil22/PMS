import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TaskBoardService } from '../services/task-board.service';
import { iTask } from 'src/app/Models/Employee/iTask';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit{

  employeeTasksData: iTask[] = [];
  todo: iTask[] = [];
  inProgress: iTask[] = [];
  done: iTask[] = [];
  mainTextHeader: string = 'Tasks';


  constructor(private _TaskBoardService: TaskBoardService, private _ToastrService:ToastrService,private _Router:Router) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this._TaskBoardService.getAllEmployeeTasks().subscribe({
      next: (res) => {
        this.employeeTasksData = res.data;
        this.todo = this.employeeTasksData.filter(
          (tasks) => tasks.status == 'ToDo'
        );
        this.inProgress = this.employeeTasksData.filter(
          (tasks) => tasks.status == 'InProgress'
        );
        this.done = this.employeeTasksData.filter(
          (tasks) => tasks.status == 'Done'
        );
      },
    });
  }


  drop(event: CdkDragDrop<iTask[]>) {
    const item = event.previousContainer.data[event.previousIndex];

    let newStatus: string;

    if (event.container.id === 'cdk-drop-list-0') {
        newStatus = 'ToDo';
    } else if (event.container.id === 'cdk-drop-list-1') {
        newStatus = 'InProgress';
    } else if (event.container.id === 'cdk-drop-list-2') {
        newStatus = 'Done';
    } else {
        newStatus = item.status;
    }

    if (event.previousContainer === event.container) {
        moveItemInArray(
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );
    } else {
        transferArrayItem(
            event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
        );

        this._TaskBoardService
            .employeeTaskStatusChange(item.id, newStatus)
            .subscribe({
                next: () => {
                    item.status = newStatus;
                },
                error: (err) => {
                    this._ToastrService.error('Error updating task status:' , err )
                },
                complete: () => {
                  this._ToastrService.success('Status updated successfully!')
                },
            });
    }
}

viewTaskDetails(item:iTask):void{
  console.log(item)

  this._Router.navigate(['/dashboard/viewTask',item.id,'isEmployee','disabled'])

}


}
