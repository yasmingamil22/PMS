import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent implements OnInit {
  private readonly notifier: NotifierService;
  //? Main Text Add-Edit header  will be passed to the add-edit--shared-header component
  mainTextHeader: string = 'Add a New Project';

  //? Main Text Add-Edit header Link  will be passed to the add-edit--shared-header component
  mainTxTHeaderLink: string = 'View All Projects';


  // Initialize form group with title and description control
  addEditProjectForm: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  })

  constructor(private _ProjectsService: ProjectsService,
    notifierService: NotifierService, private _Router: Router) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.onCreateProject()
  }


  onCreateProject() {
    // console.log(this.addEditProjectForm.value);
    this._ProjectsService.addManagerProject(this.addEditProjectForm.value).subscribe({
      next: (res) => { },
      error: (error: HttpErrorResponse) =>
        this.notifier.notify('error', error.error.message),
      complete: () => {
        this.notifier.notify('success', 'Project Created Successfully');
      }
    })
  }

  // onDeleteProject()




}
