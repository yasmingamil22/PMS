import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProjectData, IProjectParams, IProjects } from './interface/projects';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {

  //? Main Text header  will be passed to the main-shared-header component
  mainTextHeader: string = 'Projects';

  //? Main Text Btn header  will be passed to the main-shared-header component
  mainTxTHeaderBtn: string = 'Add project';


  projectList: IProjectData = {
    pageNumber: 0,
    pageSize: 0,
    data: [],
    totalNumberOfPages: 0,
    totalNumberOfRecords: 0,
  }

  projectTitle: string = '';
  pageNumber: number = 1;
  pageSize: number = 10;

  public displayColumns: any[] = ['title', 'description', 'creationDate', 'modificationDate', 'task', 'menu']

  public dataSource: any = [];

  constructor(private _ProjectsService: ProjectsService, private _HttpClient: HttpClient, private Toastr: ToastrService) { }
  ngOnInit(): void {
    this.getManagerProjects()
  }

  getManagerProjects() {
    let params: IProjectParams = {
      title: this.projectTitle,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
    this._ProjectsService.getManagerProject(params).subscribe({
      next: (res) => {
        this.projectList = res
        this.dataSource = res.data
        console.log(this.dataSource);

      },
      error: (error: HttpErrorResponse) =>
        this.Toastr.error(error.error.message, 'Error'),
      complete: () => {
        this.Toastr.success('The items were successfully retrieved.', 'Success')
        console.log(this.projectList);
      }
    })
  }
}
