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
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NotifierModule } from 'angular-notifier';
import { AddEditHeaderComponent } from './components/add-edit-header/add-edit-header.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './components/delete/delete.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    SharedComponent,
    SidebarComponent,
    NavbarComponent,
    TrimEmailPipe,
    SharedHeaderComponent,
    PageNotFoundComponent,
    AddEditHeaderComponent,
    DeleteComponent
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
    NotifierModule.withConfig({

      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      },
      theme: 'material',
      behaviour: {
        autoHide: 5000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      },
      animations: {
        enabled: true,
        show: {
          preset: 'slide',
          speed: 300,
          easing: 'ease'
        },
        hide: {
          preset: 'fade',
          speed: 300,
          easing: 'ease',
          offset: 50
        },
        shift: {
          speed: 300,
          easing: 'ease'
        },
        // overlap: 150

      }
    }),
    FormsModule,
    MatSelectModule,
    MatDividerModule,
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
    PageNotFoundComponent,
    NotifierModule,
    AddEditHeaderComponent,
    FormsModule,
    MatSelectModule,
    MatDividerModule,

  ],

})
export class SharedModule { }
