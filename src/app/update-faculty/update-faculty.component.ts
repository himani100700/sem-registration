import { Component, OnInit } from '@angular/core';
import { CreatestdService } from './../createstd.service';
import { FormGroup,FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrls: ['./update-faculty.component.css']
})
export class UpdateFacultyComponent implements OnInit {
  
  updateFaculty= new FormGroup(
    {
    username: new FormControl('') ,
    department: new FormControl(''),
  })
  constructor(private create: CreatestdService, private route:ActivatedRoute) { }
  updatefaculty()
  {
   console.warn(this.updateFaculty.value);
    this.create.UpdateFaculty(this.updateFaculty.value).
    subscribe((result)=>{
      console.warn(result)
      alert("Successfully Updated")
    this.updateFaculty.reset({})
    },
    (err)=> {
      alert("Something went wrong")
      console.warn(err)
    }
    )
  }
  
  
  ngOnInit(): void {
  }

} 
