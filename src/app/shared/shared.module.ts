import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxDropzoneModule,
    MatDialogModule,
    
    
  ],
  exports: [
    MatDialogModule,
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxDropzoneModule
  ]
})
export class SharedModule { }
