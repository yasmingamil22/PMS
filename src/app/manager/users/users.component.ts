import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { ITableData, IEmployee } from './models/users';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  pageSize:number = 10 ;
  pageNumber:number = 1 ;
  tableData: ITableData | any ;
  listUsers: IEmployee[] = [] ;
  message:string = '';
  constructor(private _UsersService:UsersService , public dialog: MatDialog , private _ToastrService:ToastrService){
  }
  ngOnInit(): void {
    this.getAllUsers();
  }

// Get All Users
getAllUsers(){
  let params = {
    pageSize: this.pageSize ,
    pageNumber: this.pageNumber
  }
  this._UsersService.getUsers(params).subscribe({
    next:(res)=>{
     // console.log(res);
      this.tableData = res ;
      this.listUsers = this.tableData.data;    
    },
    error:(err)=>{
      console.log(err.error.message);
      
    }
  })
}
// Pagination
handlePageEvent(e: PageEvent) {
  // console.log(e)
   this.pageSize = e.pageSize;
   this.pageNumber = e.pageIndex;
 // Any change in pageSize | pageNumber ==> Call API Again
   this.getAllUsers();
 }
// Open Block Dialog
openBlockDialog(item:IEmployee): void {
  const dialogRef = this.dialog.open(BlockUserComponent, {
    data: item,
  });

  dialogRef.afterClosed().subscribe(result => {
   // console.log('The dialog was closed',result);
      if(result){
        this.onActivateuser(result)
      }
  });
}
// Block & Non-Block
onActivateuser(id:number){
  this._UsersService.activateUser(id).subscribe({
    next:(res)=>{
      this.message = res;
     // console.log(this.message);
      
    },
    error:(err)=>{
      console.log(err.error.message);
      this._ToastrService.error(err.error.message , 'Notify That!')
    },
    complete:()=>{
      this.getAllUsers();
        this._ToastrService.success(this.message , 'Proccess is Completed Successfully')
    
    
    }
  })
}

}
