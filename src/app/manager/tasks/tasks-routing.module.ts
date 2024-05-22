import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AddEditTasksComponent } from './components/add-edit-tasks/add-edit-tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  
  { path: 'addTask', component: AddEditTasksComponent,title:'Add Task' },
  { path: 'editTask/:id', component: AddEditTasksComponent ,title:'Edit Task'},
  { path: 'view/:id/:mode', component: AddEditTasksComponent ,title:'View Task'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
