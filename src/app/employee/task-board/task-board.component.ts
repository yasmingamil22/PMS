import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TaskBoardService } from '../services/task-board.service';
import { ITask } from 'src/app/Models/Employee/iTask';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent {
  dummyTasks = Array(8)
    .fill(0)
    .map((x, i) => i + 1);
  // id!: number;
  employeeTasksData: any[] = [];
  todo: any[] = []; //of type Task - Make interface
  inProgress: any[] = []; //of type Task - Make interface
  done: any[] = []; //of type Task - Make interface
  taskId: number = 0;

  constructor(private _TaskBoardService: TaskBoardService) {
    this.getAllTasks();
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this._TaskBoardService.getAllEmployeeTasks().subscribe({
      next: (res) => {
        console.log(res);
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

  getTaskById(id: number) {
    this._TaskBoardService.getTaskById(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log('ISRAAAAAAAAAAAAAAAAAAAAAAA');
      },
      error: () => {},
      complete: () => {},
    });
  }

  drop(event: CdkDragDrop<ITask[]>) {
    console.log(event);
    const item = event.previousContainer.data[event.previousIndex];
    const newStatus = event.container.id;

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this._TaskBoardService
        .employeeTaskStatusChange(item.id, newStatus)
        .subscribe({
          next: (res) => {
            console.log(res);
            transferArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
            );
            item.status = newStatus;
          },
          error: (err) => {
            console.error("Error updating task status:", err);
          },
          complete: () => {},
        });
    }
  }
}
