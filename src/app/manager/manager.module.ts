import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    ManagerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
   
  ]
})
export class ManagerModule { }
