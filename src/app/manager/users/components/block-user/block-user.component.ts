import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent {
  // userId: number | undefined; 
  // userName: string | undefined; 
  // isActive: boolean | undefined;
  constructor(
    public dialogRef: MatDialogRef<BlockUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

onNoClick(): void {
    this.dialogRef.close();
  }

}
