import { Component, OnInit } from '@angular/core';
import { CreatestdService } from './../createstd.service';
import { FormGroup,FormControl } from '@angular/forms'
@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent implements OnInit {
  
  constructor(private create: CreatestdService) { }

  deleteStd= new FormGroup({
    roll_no: new FormControl('')
  })
  message:string;
  DeleteStd()
  {
    this.create.stdID = this.deleteStd.value.roll_no;
    this.create.deleteStd().subscribe((data)=>{
      console.warn("data")
      console.warn(this.deleteStd.value.roll_no)
      this.message="Student Deleted Successfully!";
    })
  }

  ngOnInit(): void {
  }

} 
