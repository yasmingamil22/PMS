import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ProjectsTableService } from '../services/projects-table.service';
import { iEmployeeProjects, iProjectsResponse } from '../../Models/Employee/iTask';


@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent {
  employeeProjectsData: iEmployeeProjects[] = [];
  pageSize: number = 10;
  pageNumber: number = 0;
  total: number = 0;
  listData!: iProjectsResponse;
  titleSearch: string = '';
  mainTextHeader: string = 'Projects';

  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  constructor(
    private _ProjectsTableService: ProjectsTableService,
    public dialog: MatDialog,
    private _ToastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProjectsForEmployee();
  }

  getProjectsForEmployee() {
    let paramData = {
      title: this.titleSearch,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber + 1,
    };
    this._ProjectsTableService
      .getProjectsForEmployee(paramData)
      .subscribe({
        next: (res) => {
          this.employeeProjectsData = res.data;
          this.listData = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getProjectsForEmployee();
  }
}
