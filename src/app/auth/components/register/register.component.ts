import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { VerifyComponent } from '../verify/verify.component';
import { NgxFileDropEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _FormBuilder:FormBuilder,private _AuthService:AuthService,private _ToastrService:ToastrService,public dialog: MatDialog ){}
  hide = true;
  hide2 = true;
  loading:boolean = false

  code:string=''

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string ,emailIn:string): void {
    this.dialog.open(VerifyComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{email:emailIn,code:this.code},
    });

    
  }
  

registerForm:FormGroup = this._FormBuilder.group({
  userName:['',[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{3,7}[0-9]$/)]],
  email:['',[Validators.required,Validators.email]],
  country:['',[Validators.required]],
  phoneNumber:['',[Validators.required]],
  password:['',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/)]],
  confirmPassword:['',[RxwebValidators.compare({fieldName:'password'}),Validators.required]]
})
email:string=''
handleRegister(){
  let formdata = new FormData()
  Object.entries(this.registerForm.value).forEach(([key, value]:any) => {
    formdata.append(`${key}`,value)
  });

  if (this.uploadedFile && this.uploadedFile.name) {
    formdata.append('profileImage', this.uploadedFile, this.uploadedFile.name);
    
  }

 if(!this.loading){
  this.loading = true
  this._AuthService.registerUser(formdata).subscribe({
    next:res=>{
      this.openDialog('700ms','350ms',this.email)
      this.loading=false
      console.log(res);
      this.loading = false
      this._ToastrService.success(res.message)
    },
    error:err=>{
      this.loading = false
      console.log(err);
      this._ToastrService.error(err.error.message)
      
    }
  })
 }
}


 imageUrl: string = '';
  uploadedFile!: File ; // Property to store the uploaded file
  imageUploaded:boolean=false;

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




}
