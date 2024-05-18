import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditTasksComponent } from './components/add-edit-tasks/add-edit-tasks.component';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    AddEditTasksComponent,
    ViewtaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class TasksModule { }
