import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { AddEditTasksComponent } from './components/add-edit-tasks/add-edit-tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  {path:'add',component:AddEditTasksComponent,title:'Add Task Form'},
  {path:'edit/:id',component:AddEditTasksComponent,title:'Edit Task Form'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
