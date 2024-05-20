import { Component, Inject } from '@angular/core';
import { TasksService } from './core/tasks.service';
import { Tasks } from './core/tasks';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ViewtaskComponent } from './components/viewtask/viewtask.component';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { DeleteComponent } from 'src/app/shared/components/delete/delete.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
constructor(private _TasksService:TasksService,public dialog: MatDialog,private _ToastrService:ToastrService){}
tasksData:Tasks[]=[]
pageSize:number = 10
pageNumber:number = 1
total:number=0
ngOnInit(): void {

  this.getTasksForManagaer()
}
openDeleteDialog(enterAnimationDuration: string, exitAnimationDuration: string , id:number): void {
 const dialo= this.dialog.open(DeleteComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
    data:id
  });
  dialo.afterClosed().subscribe(res=>{
    if(res!=null){
      this.delTask(res)
    }
  })
}

openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string,data:object): void {
  this.dialog.open(ViewtaskComponent, {
    width: '550px',
    enterAnimationDuration,
    exitAnimationDuration,
    data:data
  });
}

status:string = ''
title:string = ''
delTask(id:number){
  this._TasksService.deleteTask(id).subscribe({
    next:res=>{
      this._ToastrService.success('Task deleted successfully')
    },
    error:err=>{
      this._ToastrService.error(err)
    },
    complete:()=>{
      this.getTasksForManagaer()
    }
  })
}
getTasksForManagaer(){
  let data = {
    title:this.title,
    status:this.status,
    pageSize:this.pageSize,
    pageNumber:this.pageNumber
  }
  this._TasksService.getTasksForManager(data).subscribe({
    next:res=>{
      this.tasksData = res.data
      this.total = res.totalNumberOfRecords
      localStorage.setItem('tasksNumber',JSON.stringify(res.totalNumberOfRecords))

    },error:err=>{
      console.log(err);

    }
  })
}

pageSizeOptions = [5, 10, 25];

hidePageSize = false;
showPageSizeOptions = true;
showFirstLastButtons = true;
disabled = false;

pageEvent!: PageEvent;

handlePageEvent(e: PageEvent) {
  this.pageEvent = e;
  this.total = e.length;
  this.pageSize = e.pageSize;
  this.pageNumber = e.pageIndex;
  this.getTasksForManagaer()
}

// Delete Tasks
// openDeleteDialog(data: any): void {
//   console.log(data);
//   const dialogRef = this.dialog.open(DeleteComponent, {
//     data:data,
//     width: '40%'
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     if (result) {
//       this.onDeleteTask(result.id);
//     }
//   });
// }

//? Function To Delete Project By ID
onDeleteTask(id: number) {
  this._TasksService.onDeleteTask(id).subscribe({
    next:(res)=>{
      console.log(res);

    },
    error:(err)=>{
      console.log(err.error.message);

    },
    complete: () => {
      this.getTasksForManagaer()
    }

  })
}




}
