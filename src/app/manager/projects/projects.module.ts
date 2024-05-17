import { NgModule } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    AddEditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    SlicePipe,









  ]
})
export class ProjectsModule { }
