import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';

const routes: Routes = [
  { path: '', component: ManagerComponent ,children:[
    {path:'',redirectTo:'users'},
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  ] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
