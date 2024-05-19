import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { TaskBoardComponent } from './task-board/task-board.component';

const routes: Routes = [{ path: '', component: EmployeeComponent },
{ path: 'task-board', component: TaskBoardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
