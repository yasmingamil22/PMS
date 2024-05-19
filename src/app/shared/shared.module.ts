import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { MatPaginatorModule} from '@angular/material/paginator';
import { DeleteComponent } from './components/delete/delete.component';

@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    MatDialogModule,
    NgxDropzoneModule,
    RouterModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
     MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatDialogModule,
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatDividerModule,
    MatPaginatorModule
  ]
})
export class SharedModule { }
