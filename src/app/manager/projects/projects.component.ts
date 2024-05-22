import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProjectData, IProjectParams } from './interface/projects';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete-project/delete.component';
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
  pageNumber: number = 0;
  pageSize: number = 10;

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
      pageSize: this.pageSize,
      pageNumber: this.pageNumber+1,
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
      error: (error) =>
        this._ToastrService.error('Opps Error' , 'Notify That!' )
      ,
      complete: () => {
      this.onGetManagerProjects()
      this._ToastrService.success('The Certificate has been successfully deleted' , 'Done!')
      }

    })
  }

  // Function To Open Project DeleteDialog ...
  openDeleteDialog(id: number,projectName:string): void {
   // console.log(id);
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: { itemID: id ,name:projectName,type:'project'},
      width: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onDeleteProject(id);
      }
    });
  }


  // Handle Paginator ...
  pageSizeOptions = [5, 10, 25];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  
  pageEvent!: PageEvent;
  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.onGetManagerProjects()
  }
}
