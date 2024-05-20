import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeeComponent,
    TaskBoardComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    DragDropModule,
    SharedModule,
  ]
})
export class EmployeeModule { }
