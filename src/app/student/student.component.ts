import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  loginStdData= new FormGroup({
    full_name: new FormControl(''),
    student_no: new FormControl('') 
  }) ;


  constructor(private service: CreatestdService, private _router:Router) {
    
  } 
  
  loginStd(){
    
    this.service.loginStd(this.loginStdData.value).subscribe(
      res =>{ console.log(res)
        this._router.navigate(["proceed"])
      },
      err => console.log(err),
       
    )

    
  }

  ngOnInit(): void {
  }

}