import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'view/:id', component: ViewUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
