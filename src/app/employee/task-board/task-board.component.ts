import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TaskBoardService } from '../services/task-board.service';


@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent {

  dummyTasks = Array(8).fill(0).map((x, i) => i + 1);

  employeeTasksData: any[] = [];
  todo: any[] = []; //of type Task - Make interface
  inProgress: any[] = []; //of type Task - Make interface
  done: any[] = []; //of type Task - Make interface

  constructor(private _TaskBoardService:TaskBoardService) {
    this.getAllTasks()
  }


  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this._TaskBoardService.getAllEmployeeTasks().subscribe({
      next: (res) => {
        console.log(res);
        this.employeeTasksData = res.data;
        this.todo = this.employeeTasksData.filter(tasks => tasks.status ==  'ToDo');
        this.inProgress = this.employeeTasksData.filter(tasks => tasks.status ==  'InProgress');
        this.done = this.employeeTasksData.filter(tasks => tasks.status ==  'Done');

      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
