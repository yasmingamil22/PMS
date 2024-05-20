import { ChangePasswordComponent } from '../change-password/change-password.component';
import { AuthService } from './../../../auth/services/auth.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  emptyImg: string =
    '../../../../assets/images/dummy-profile-pic-300x300-1.png';
  imgUrl: string = 'https://upskilling-egypt.com:3003/';
  currentUser: any;
  constructor(private _AuthService: AuthService, private dialog: MatDialog) {
    this.getCurrentUser();
  }

  // onLogout() {
  //   this._AuthService.logout();
  // }

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


  openChangePasswordDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
     //   console.log('Received data from dialog:', result); //add a toaster or notifier
      }
    });
  }
}
