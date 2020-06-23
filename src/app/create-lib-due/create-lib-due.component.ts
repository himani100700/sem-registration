import { Component, OnInit } from '@angular/core';
import { CreatestdService } from './../createstd.service';
import { FormGroup,FormControl } from '@angular/forms'
@Component({
  selector: 'app-create-lib-due',
  templateUrl: './create-lib-due.component.html',
  styleUrls: ['./create-lib-due.component.css']
})
export class CreateLibDueComponent implements OnInit {
  alert:boolean=false
  createLibdue= new FormGroup({
    full_name: new FormControl(''),
    student_no: new FormControl('') ,
    roll_no: new FormControl(''),
    branch: new FormControl(''),
  })

  constructor(private create: CreatestdService) { }
  CreateLibdue()
  {
   
    this.create.createLibdue(this.createLibdue.value).subscribe((result)=>{
    this.alert=true
    this.createLibdue.reset({})
    })
    
  }
  closeAlert(){
    this.alert=false
  }

  ngOnInit(): void {
  }

}
