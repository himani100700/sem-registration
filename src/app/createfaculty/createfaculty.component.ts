import { Component, OnInit } from '@angular/core';
import { CreatestdService } from './../createstd.service';
import { FormGroup,FormControl } from '@angular/forms'


@Component({
  selector: 'app-createfaculty',
  templateUrl: './createfaculty.component.html',
  styleUrls: ['./createfaculty.component.css']
})
export class CreatefacultyComponent implements OnInit {
alert:boolean=false
createFaculty= new FormGroup({
  name: new FormControl(''),
  username: new FormControl('') ,
  department: new FormControl(''),
  password: new FormControl(''),
  passwordConfirm: new FormControl(''),
})

constructor(private create: CreatestdService) { }

getfaculty()
{
 
  this.create.createFaculty(this.createFaculty.value).subscribe((result)=>{
  this.alert=true
  this.createFaculty.reset({})
  })
  
}
closeAlert(){
  this.alert=false
}

  ngOnInit(): void {
  }

}
