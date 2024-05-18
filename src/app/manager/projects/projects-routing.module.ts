import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'addProject', component: AddEditProjectComponent },
  { path: 'editProject/:id', component: AddEditProjectComponent },
  { path: 'viewProject/:id/:mood', component: AddEditProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
