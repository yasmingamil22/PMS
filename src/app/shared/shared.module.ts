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
import { TrimEmailPipe } from '../pipes/trimEmail.pipe';
import { MatTableModule } from '@angular/material/table';
import { SharedHeaderComponent } from './components/shared-header/shared-header.component';
import { AddEditHeaderComponent } from './components/add-edit-header/add-edit-header.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete-project/delete.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { MatPaginatorModule} from '@angular/material/paginator';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NoDataComponent } from './components/no-data/no-data.component';


@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    TrimEmailPipe,
    SharedHeaderComponent,
    AddEditHeaderComponent,
    DeleteComponent,
    ChangePasswordComponent,
    HomeComponent,
    NotFoundComponent,
    NoDataComponent
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
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    
    FormsModule,
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
    MatPaginatorModule,
    TrimEmailPipe,
    MatTableModule,
    MatCardModule,
    SharedHeaderComponent,
    AddEditHeaderComponent,
    FormsModule,
    MatSelectModule,
    MatDividerModule,
    HomeComponent,
    NoDataComponent
  ],

})
export class SharedModule { }
