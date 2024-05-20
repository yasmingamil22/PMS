import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IProjectsByID } from '../../interface/projects';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent implements OnInit {

  //? Main Text Add-Edit header  will be passed to the add-edit--shared-header component
  mainTextHeader: string = 'Add a New Project';

  //? Main Text Add-Edit header Link  will be passed to the add-edit--shared-header component
  mainTxTHeaderLink: string = 'View All Projects';

  //? Initialize form group with title and description control
  addEditProjectForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })


  projectID: number = 0;

  projectList: IProjectsByID = {
    id: 0,
    title: '',
    description: '',
    creationDate: 0,
    modificationDate: 0,
    task: [],
    manager: []
  }

  constructor(private _ProjectsService: ProjectsService,
    private _ActivatedRoute: ActivatedRoute, private _Location: Location) {
  }

  ngOnInit(): void {
    this.projectID = this._ActivatedRoute.snapshot.params['id']
    console.log(this.projectID);
    if (this.projectID) {
      this.onGetProjectByID(this.projectID)
      
    }
  }

  //? Function To Get Project By ID
  onGetProjectByID(id: number) {
    this._ProjectsService.getProjectById(id).subscribe({
      next: (res) => {
        this.projectList = res
        console.log(this.projectList);
      },
      error(err) { },
      complete: () => {
        this.addEditProjectForm.patchValue({
          title: this.projectList.title,
          description: this.projectList.description
        })
     
      },
    })
  }

  disableFormControls() {
    this.addEditProjectForm.get('title')?.disable();
    this.addEditProjectForm.get('description')?.disable();
  }
  //? Function To Add and Edit Project
  onAddEdietProject(ProjectForm: FormGroup) {
    console.log(ProjectForm.value);
    if (this.projectID) {
      this._ProjectsService.editManagerProject(this.projectID, ProjectForm.value).subscribe({
        next: () => { },
        error: (error: HttpErrorResponse) =>
         {},
        complete: () => {
          this._Location.back();
        }
      })
    } else {
      this._ProjectsService.addManagerProject(ProjectForm.value).subscribe({
        next: () => { },
        error: (error: HttpErrorResponse) =>
          {},
        complete: () => {
          this._Location.back();
        }
      })
    }
  }
}
