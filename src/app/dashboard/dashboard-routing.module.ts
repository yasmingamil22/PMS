import { employeeGuard } from './../core/guards/employee.guard';
import { managerGuard } from './../core/guards/manager.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../shared/home/home.component';
import { AddEditTasksComponent } from '../manager/tasks/components/add-edit-tasks/add-edit-tasks.component';


const routes: Routes = [{
  path: '', component: DashboardComponent, children: [
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent , title: 'Home'},
  { path: 'viewTask/:id/:role/:mode', component: AddEditTasksComponent ,title:'View Task'},

    { path: 'manager',canActivate:[managerGuard] ,
    loadChildren: () => import('../manager/manager.module').then(m => m.ManagerModule) },
    { path: 'employee',canActivate:[employeeGuard] ,
    loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule) },
    { path: 'profile',
    loadComponent: () => import('../shared/components/profile/profile.component').then(m => m.ProfileComponent) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
