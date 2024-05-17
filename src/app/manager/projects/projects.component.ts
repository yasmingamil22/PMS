import { Component, Inject, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProjectData, IProjectParams, IProjects } from './interface/projects';
import { NotifierService } from 'angular-notifier';
import { AddEditProjectComponent } from './components/add-edit-project/add-edit-project.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { HelperService } from 'src/app/shared/services/helper.service';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {


  private readonly notifier: NotifierService;

  //? Main Text header  will be passed to the main-shared-header component
  mainTextHeader: string = 'Projects';

  //? Main Text Btn header  will be passed to the main-shared-header component
  mainTxTHeaderBtn: string = 'Add project';


  projectFiltrationValue: string = '';
  myControl = new FormControl();
  filteredProject: any[] = [];
  projects: any[] = []; // assuming you have a list of categories



  projectList: IProjectData = {
    pageNumber: 0,
    pageSize: 0,
    data: [],
    totalNumberOfPages: 0,
    totalNumberOfRecords: 0,
  }

  projectTitle: string = '';
  PageNumber: number = 1;
  PageSize: number = 10;

  fullText: string = '';


  public displayColumns: any[] = ['title', 'description', 'creationDate', 'modificationDate', 'task', 'menu']

  public dataSource: any = [];

  constructor(private _ProjectsService: ProjectsService,
    private _HttpClient: HttpClient, notifierService: NotifierService,
    private dialog: MatDialog, private _Router: Router) {
    this.notifier = notifierService;
  }
  ngOnInit(): void {
    this.getManagerProjects()
    this.filteredProject = this.projects;
    this.myControl.valueChanges
      .pipe(startWith(''), map((value) => this._filter(value))
      )
      .subscribe((filteredProjects) => {
        this.filteredProject = filteredProjects;
      });
  }


  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.projectList.data.filter((project) =>
      project.title.toLowerCase().includes(filterValue)
    );
  }
  //? Function To Get All Project 
  getManagerProjects() {
    let params: IProjectParams = {
      title: this.projectFiltrationValue,
      pageSize: this.PageSize,
      pageNumber: this.PageNumber,
    };
    this._ProjectsService.getManagerProject(params).subscribe({
      next: (res) => {
        this.projectList = res
        this.dataSource = res.data
        console.log(this.projectList);

      },
      error: (error: HttpErrorResponse) =>
        this.notifier.notify('error', error.error.message),
      complete: () => {
        this.notifier.notify('success', 'The items were successfully retrieved.!');
      }
    })
  }

  openDeleteDialog(id: number): void {
    console.log(id);
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { itemID: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteProject(result);
      }
    });
  }

  //? Function To Delete Project By ID
  onDeleteProject(id: number) {
    this._ProjectsService.deleteManagerProject(id).subscribe({
      next: () => { },
      error: (error: HttpErrorResponse) =>
        this.notifier.notify('error', error.error.message),
      complete: () => {
        this.notifier.notify('success', 'The Certificate has been successfully deleted');
        this.getManagerProjects()
      }

    })
  }


  //? handle paginator

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [1, 5, 10];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent | undefined;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.PageNumber = e.pageIndex;

    this.getManagerProjects()
  }
}
