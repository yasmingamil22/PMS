import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../core/tasks.service';
import { Users, projects } from '../../core/users';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Route, Router, RouterLinkActive } from '@angular/router';
import { Tasks } from '../../core/tasks';

@Component({
  selector: 'app-add-edit-tasks',
  templateUrl: './add-edit-tasks.component.html',
  styleUrls: ['./add-edit-tasks.component.scss']
})
export class AddEditTasksComponent {

  editTextHeader: string = 'Update this task';
  addTextHeader: string = 'Add a new task';
  mainTxTHeaderLink: string = 'View all tasks';
  id:number=0
  modeParam:string=''
  role:string=''
  isNonDisplay:boolean=false


  allUsers:Users[]=[]
  allProjects:projects[]=[]
  task:Tasks={} as Tasks


  addEditForm:FormGroup = this._FormBuilder.group({
    title:['',[Validators.required]],
    description:['',[Validators.required]],
    employeeId:['',[Validators.required]],
    projectId:['',[Validators.required]]
  })



  constructor(private _FormBuilder:FormBuilder,private _TasksService:TasksService,private _ToastrService:ToastrService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params['id']
    this.modeParam = this._ActivatedRoute.snapshot.params['mode'];
    this.role=this._ActivatedRoute.snapshot.params['role'];

    if(this.role!='isEmployee' ){
      console.log("manger")
      this.getUsers()
      this.getProjects()
    }
  

   if (this.id) {
    this.getTaskByID()

  }

  if (this.modeParam == 'disabled') {
    this.addEditForm.disable();
    this.isNonDisplay = false;
    this.editTextHeader='View this task'
  } else {
    this.addEditForm.enable()
    this.isNonDisplay = true;
  }

  }

  getUsers(){
    this._TasksService.getAllusers().subscribe({
      next:res=>{
        this.allUsers = res.data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
  getProjects(){
    this._TasksService.getAllProjects().subscribe({
      next:res=>{
        this.allProjects = res.data
      }
    })
  }

  addOrEditTask(){   
    if(this.id){
      this._TasksService.updateTask(this.id,this.addEditForm.value).subscribe({
        next:res=>{
 
        },
        error:err=>{
          this._ToastrService.error(err)
        },
        complete:()=>{
          this._Router.navigate(['/dashboard/manager/tasks']);
          this._ToastrService.success('Task Updated successfully' , 'Done!')
        }
      })
    }

    else{
      this._TasksService.addTask(this.addEditForm.value).subscribe({
        next:res=>{
          //console.log(res);       
          
        },
        error:err=>{
          this._ToastrService.error(err.message)
        },
        complete:()=>{
          this._Router.navigate(['/dashboard/manager/tasks']);
          this._ToastrService.success('Task Added successfully' , 'Done!') 
        }
      })
    }
   }
  
  getTaskByID(){
    if(this.id){
      this._TasksService.getTaskById(this.id).subscribe({
        next:res=>{
          console.log(res);
          this.task=res
         
        },
        error:err=>{
          console.log(err);
          
        },
        complete:()=>{

          this.addEditForm.patchValue({
            title:this.task.title,
            description:this.task.description,
            employeeId:this.task.employee.id,
            projectId:this.task.project.id
          })

        }
      })
    }
  }
}
