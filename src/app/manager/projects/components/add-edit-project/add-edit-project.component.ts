import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IProjectsByID } from '../../interface/projects';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.scss']
})
export class AddEditProjectComponent implements OnInit {
 

  // Main Text Add-Edit header  will be passed to the add-edit--shared-header component ...
  editTextHeader: string = 'Update a New Project';

  addTextHeader: string = 'Add a New Project';


  // Main Text Add-Edit header Link  will be passed to the add-edit--shared-header component ...
  mainTxTHeaderLink: string = 'View All Projects';

  // Initialize form group with title and description control ...
  addEditProjectForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  })


  projectID: number = 0;
  moodPram: string = '';
  EditPram: string = '';

  isNonDisplay: boolean = false

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
    private _ActivatedRoute: ActivatedRoute,
     private _Location: Location , private _ToastrService:ToastrService , private _Router:Router) {
    
  }

  ngOnInit(): void {
    this.projectID = this._ActivatedRoute.snapshot.params['id'];
    this.moodPram = this._ActivatedRoute.snapshot.params['mood'];
    this.EditPram = this._ActivatedRoute.snapshot.params['edit'];

    //If the Condition To Catch ID From URL To Call Function onGetProjectByID ...
    if (this.projectID) {
      this.onGetProjectByID(this.projectID)
    }

    // If the condition to catch MoodPram from the URL To Make addEditProjectForm 
    // Disable In Case #View ..

    if (this.moodPram == 'disabled') {
      this.addEditProjectForm.disable();
      this.isNonDisplay = false;
    } else {
      this.addEditProjectForm.enable()
      this.isNonDisplay = true;
    }
  }

  // Function To Get Project By ID ...

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


  //Function To Add and Edit Project ...

  onAddEdietProject(ProjectForm: FormGroup) {
    console.log(ProjectForm.value);
    if (this.projectID) {
      this._ProjectsService.editManagerProject(this.projectID, ProjectForm.value).subscribe({
        next: () => { },
        error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message , 'Notify That!' )
        ,
        complete: () => {
          this._Router.navigate(['/dashboard/manager/projects'])
         this._ToastrService.success('The Record Updated Successfully' , 'Done!')
        }
      })
    } else {
      this._ProjectsService.addManagerProject(ProjectForm.value).subscribe({
        next: () => { },
        error: (error: HttpErrorResponse) =>
          this._ToastrService.error(error.error.message , 'Notify That!' )
        ,
        complete: () => {
          this._Router.navigate(['/dashboard/manager/projects'])
        this._ToastrService.success('Project Created Successfully', 'Done!')
        }
      })
    }
  }
}
