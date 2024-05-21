import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/manager/users/services/users.service';
import { IEmployee } from 'src/app/manager/users/models/users';
import { SharedModule } from '../../shared.module';
import { ConfirmPassComponent } from '../confirm-pass/confirm-pass.component';
import { MatDialog } from '@angular/material/dialog';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,SharedModule,NgxFileDropModule, ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  currentUserForm: FormGroup;

  constructor(private _UsersService:UsersService   , private dialog: MatDialog,    private toastr: ToastrService,

  ){

    this.currentUserForm=new FormGroup({
      userName:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{3,}[0-9]$/)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      country:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required]),
  
    })

    if (this.noEdit) {
      this.currentUserForm.disable();
    }
  }
  currentUser!:IEmployee;
  pathHttps: string = 'https://upskilling-egypt.com:3003/';

  imageUrl: string = '';
  uploadedFile!: File ; // Property to store the uploaded file
  imageUploaded:boolean=false;
  imgNeededToEdit:string=''




 noEdit:boolean=true;
  ngOnInit(): void {
    this.getCurrentUser()
  }

  toggleEdit() {
    this.noEdit = !this.noEdit;
    if (this.noEdit) {
      this.currentUserForm.disable();
    } else {
      this.currentUserForm.enable();
    }
  }

  getCurrentUser():void{
    this._UsersService.getCurrentUser().subscribe({
      next:(res)=>{
        this.currentUser=res

        if(this.currentUser.imagePath){
          this.imgNeededToEdit=this.pathHttps+this.currentUser.imagePath
        }

      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{

        this.currentUserForm.patchValue({
           
          userName:this.currentUser.userName,
          email:this.currentUser.email,
          country:this.currentUser.country,
          phoneNumber:this.currentUser.phoneNumber,
         })

      }
    })
  }











   
 
   //ngx file drop
   public files: NgxFileDropEntry[] = [];
 
   public dropped(files: NgxFileDropEntry[]) {
 
     const droppedFile = files[0]; // Access the first dropped file
     if (droppedFile.fileEntry.isFile) {
       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
       fileEntry.file((file: File) => {
         // Here you can access the dropped file
         console.log('Dropped file:', file);
         // Assuming imageUrl is the URL to display the uploaded image
         this.imageUrl = URL.createObjectURL(file);
 
         this.uploadedFile = file;
 
         this.imageUploaded = true;
       });
     }
 
     }
   
 
   public fileOver(event:any){
     console.log(event);
   }
 
   public fileLeave(event:any){
     console.log(event);
   }
 


 
 editProfileUser(): void {
  if (this.uploadedFile !== null) {
    let myData = new FormData();

    Object.entries(this.currentUserForm.value).forEach(([key, value]:any) => {
      myData.append(`${key}`,value)
    });

    myData.append('confirmPassword', this.confirmPassword);



    if (this.uploadedFile && this.uploadedFile.name) {
      myData.append('profileImage', this.uploadedFile, this.uploadedFile.name);
      this.editFromApi(myData)


    } else if(this.currentUser.imagePath){
      console.log("no file uploaded");

      // Convert the image URL to a Blob
      this.convertImageUrlToBlob( this.pathHttps+ this.currentUser.imagePath)
        .then(blob => {
          myData.append('profileImage', blob, 'image.jpg');

          // Call your service method here
         this.editFromApi(myData)
  
       
        })
        .catch(error => {
          console.error("Error converting image URL to Blob:", error);
        });
    }else{
     this.editFromApi(myData)
  

    }
  }
}

// Function to convert image URL to Blob
async convertImageUrlToBlob(url: string): Promise<Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  return blob;
}

editFromApi(myData:FormData):void{
  this._UsersService.updateProfile(myData).subscribe({
    next: (res) => {
      console.log(res);

      this._UsersService.userName.next(res.userName)
      this._UsersService.userImg.next(res.imagePath)
      this._UsersService.userEmail.next(res.email)

   this.currentUser.imagePath=res.imagePath;

    },
    error: (err) => {
      console.log(err);
     this.showError(err.error.message)


    },
    complete: () => {

      this.toggleEdit();


      this.showSuccess("updated Successfully");
    }
  });
}
 

passwordFromDialog:string=''
confirmPassword:string=''
openDialog(): void {

 if(this.currentUserForm.valid){
  const dialogRef = this.dialog.open(ConfirmPassComponent, {
    data: this.passwordFromDialog,
    width: '50%' //  width here

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log( result);
   if(result){
      this.confirmPassword=result;

     this.editProfileUser()
    }
  });

 }
}

showSuccess(msg:string) {
  this.toastr.success( msg);
}
showError(msg:string) {
  this.toastr.error( msg);

}


}
