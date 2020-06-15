import { Component, OnInit } from '@angular/core';
import { CreatestdService } from './../createstd.service';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-createstd',
  templateUrl: './createstd.component.html',
  styleUrls: ['./createstd.component.css']
})
export class CreatestdComponent implements OnInit {
  alert:boolean=false
  createStd= new FormGroup({
    full_name: new FormControl(''),
    student_no: new FormControl('') ,
    roll_no: new FormControl(''),
    semester: new FormControl(''),
    course: new FormControl(''),
    branch: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    father_name: new FormControl(''),
    address: new FormControl(''),
    year: new FormControl('')
  })
  constructor(private create: CreatestdService) { }

  getStd()
  {
   
    this.create.createStd(this.createStd.value).subscribe((result)=>{
    this.alert=true
    this.createStd.reset({})
    })
    
  }
  closeAlert(){
    this.alert=false
  }

  ngOnInit(): void {
  }

}
