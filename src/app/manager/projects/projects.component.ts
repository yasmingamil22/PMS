import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProjectData, IProjectParams } from './interface/projects';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {



  // Main Text header  will be passed to the main-shared-header component
  mainTextHeader: string = 'Projects';

  // Main Text Btn header  will be passed to the main-shared-header component
  mainTxTHeaderBtn: string = 'Add project';


  projectFiltrationValue: string = '';
  myControl = new FormControl();
  filteredProject: any[] = [];
  projects: any[] = [];


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

  public dataSource: any = [];

  constructor(private _ProjectsService: ProjectsService,
    private _HttpClient: HttpClient, 
    private dialog: MatDialog, private _Router: Router, private _ToastrService:ToastrService)
     {
  }

  ngOnInit(): void {
    this.onGetManagerProjects()
    // Handel Search Input ...
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
  // Function To Get All Project ... 
  onGetManagerProjects() {
    let params: IProjectParams = {
      title: this.projectFiltrationValue,
      pageSize: this.PageSize,
      pageNumber: this.PageNumber,
    };
    this._ProjectsService.getManagerProject(params).subscribe({
      next: (res) => {
        this.projectList = res
        localStorage.setItem('projectsCount',res.totalNumberOfRecords)
     //   localStorage.setItem('projectsCount' , JSON.stringify(res.totalNumberOfRecords))
      },
      error: (error: HttpErrorResponse) =>
      this._ToastrService.error(error.error.message , 'Notify That!' )
      ,
      complete: () => {
      }
    })
  }


  // Function To Delete Project By ID ...
  onDeleteProject(id: number) {
    this._ProjectsService.deleteManagerProject(id).subscribe({
      next: () => { },
      error: (error: HttpErrorResponse) =>
        this._ToastrService.error(error.error.message , 'Notify That!' )
      ,
      complete: () => {
      this.onGetManagerProjects()
      this._ToastrService.success('The Certificate has been successfully deleted' , 'Done!')
      }

    })
  }

  // Function To Open Project DeleteDialog ...
  openDeleteDialog(id: number): void {
   // console.log(id);
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { itemID: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteProject(result);
      }
    });
  }


  // Handle Paginator ...
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
    this.onGetManagerProjects()
  }
}
