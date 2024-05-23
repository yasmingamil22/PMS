import { UsersService } from 'src/app/manager/users/services/users.service';
import { AuthService } from './../../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{

  emptyImg:string = './assets/images/dummy-profile-pic-300x300-1.png';
  imgUrl:string = 'https://upskilling-egypt.com:3003/' ;
  currentUser:any;
constructor(private _AuthService:AuthService,private _UsersService:UsersService, private dialog: MatDialog,
  private _Router:Router
){
  this.getCurrentUser();
}

ngOnInit(): void {
  this.getCurrentUser();
  this.changeInUserEmail()
  this.changeInUserImg()
  this.changeInUserName()
  
}


  onLogout() {
    this._AuthService.logout();
  }

  getCurrentUser(): void {
    this._AuthService.currentUser().subscribe({
      next: (res) => {
       // console.log(res);
        this.currentUser = res;
      },
      error: (err) => {
       // console.log(err.error.message);
      },
      complete: () => {},
    });
  }



changeInUserName(){
  this._UsersService.userName.subscribe({
    next:(val)=>{
      this.currentUser.userName=val
    },
    error:(err)=>{
     // console.log(err)
    }
  })
 }

 changeInUserImg(){
  this._UsersService.userImg.subscribe({
    next:(val)=>{
      this.currentUser.imagePath=val
    },
    error:(err)=>{
      console.log(err)
    }
  })
 }

 changeInUserEmail(){
  this._UsersService.userEmail.subscribe({
    next:(val)=>{
      this.currentUser.email=val
    },
    error:(err)=>{
      console.log(err)
    }
  })
 }


  openChangePasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
     //   console.log('Received data from dialog:', result); //add a toaster or notifier
      }
    });
  }

  openLogoutDialog(): void {
    const dialogRef = this.dialog.open(LogoutComponent, {
      data: 'logout',
      width: '40%'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

     this.onLogout()
     this._Router.navigate(['/auth/login'])
      }
    });
  }

}
