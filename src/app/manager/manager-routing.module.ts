import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component:ManagerComponent},
{path: 'home' , component: HomeComponent , title: 'Home'} ,
{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
{ path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
