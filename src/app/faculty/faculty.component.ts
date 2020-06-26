import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  alert:boolean=false
  loginFacultyData= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('') 
  }) ;

  constructor(private service: CreatestdService, private _router:Router) { }
  errormsg:string;
  loginStd(){
    
    this.service.facultyLogin(this.loginFacultyData.value).subscribe(
      res =>{ console.log(res)
        this.service.stdDue().subscribe(data=>{console.warn(data);})
        this._router.navigate(["facultypage/dashboard"])
        
      },
      err =>{ console.log(err)
        this.alert=true
      } 
    )
  }

  ngOnInit(): void {
  }

} 
