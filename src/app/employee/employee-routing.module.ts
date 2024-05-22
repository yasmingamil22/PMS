import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';

const routes: Routes = [{ path: '', component: EmployeeComponent },
{ path: 'task-board', component: TaskBoardComponent, title:'Task board' },
{ path: 'projects', component: ProjectsTableComponent, title:'Projects' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
