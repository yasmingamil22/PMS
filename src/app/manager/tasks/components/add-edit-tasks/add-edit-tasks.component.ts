import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private _FormBuilder:FormBuilder,private _TasksService:TasksService,private _ToastrService:ToastrService,private _Router:Router,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.getUsers()
    this.getProjects()
   this.id = this._ActivatedRoute.snapshot.params['id']
   this.getTaskByID()
  }
  id:number=0
  allUsers:Users[]=[]
  allProjects:projects[]=[]
  addEditForm:FormGroup = this._FormBuilder.group({
    title:[''],
    description:[''],
    employeeId:[''],
    projectId:['']
  })
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
  // id():boolean{
  //   if(this.id==null){
  //     return true
  //   }
  // }
  addTask(){   
    if(this.id>0){
      this._TasksService.updateTask(this.id,this.addEditForm.value).subscribe({
        next:res=>{
          this._ToastrService.success('Task Updated successfully')
          this._Router.navigate(['/dashboard/manager/tasks'])
        },
        error:err=>{
          this._ToastrService.error(err)
        }
      })
    }
    else{
      this._TasksService.addTask(this.addEditForm.value).subscribe({
        next:res=>{
          this._ToastrService.success('Task Added successfully')
          console.log(res);
          this._Router.navigate(['/dashboard/manager/tasks'])
          
        },
        error:err=>{
          this._ToastrService.error(err.message)
        }
      })
    }
   }
  
  task:Tasks={} as Tasks
  getTaskByID(){
    if(this.id>0){
      this._TasksService.getTaskById(this.id).subscribe({
        next:res=>{
          console.log(res);
          this.task=res
          this.addEditForm.patchValue({
            title:this.task.title,
            description:this.task.description,
            employeeId:this.task.employee.id,
            projectId:this.task.project.id
          })
        },
        error:err=>{
          console.log(err);
          
        },
      })
    }
  }
}
