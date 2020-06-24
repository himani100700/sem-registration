import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  loginStdData :Object = {
    full_name: [""] ,
    student_no: [""]
  };

  constructor(private service: CreatestdService ) { }
  
  loginStd(){
    
    this.service.loginStd(this.loginStdData).subscribe(
      res => console.log(res),
      err => console.log(err),
      // this._router.navigate(["/proceed"])
    )
  }

  ngOnInit(): void {
  }

}
