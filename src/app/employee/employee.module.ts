import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectsTableComponent } from './projects-table/projects-table.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    TaskBoardComponent,
    ProjectsTableComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    DragDropModule,
    SharedModule,
  ]
})
export class EmployeeModule { }
