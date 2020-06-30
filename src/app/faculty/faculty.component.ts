import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  isLoading = false;
  loginFacultyData= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('') 
  }) ;

  constructor(private service: CreatestdService, private _router:Router,private toastr: ToastrService,) { }
  errormsg:string;
  loginFaculty(){
    if (this.loginFacultyData.value.username=="" || this.loginFacultyData.value.password=="" ) {
      this.toastr.warning("Please fill all fields first!", "Error",{
       closeButton:true,
       "positionClass": "toast-top-center",
     });
     return;
     }
     this.isLoading = true;
    this.service.facultyLogin(this.loginFacultyData.value).subscribe(
      res =>{ 
        this.toastr.success("Login Successfull!","",{
          closeButton:true,
          "positionClass": "toast-top-center",
        })
        localStorage.setItem('token',res.data.token);
        this.isLoading = false;
        this._router.navigate(['facultypage/dashboard']);
      },
      err =>{ console.log(err)
        this.isLoading = false;
        this.toastr.error("Invalid Login Credentials!","",{
          closeButton:true,
          "positionClass": "toast-top-center",
        })
      } 
    )
  }

  ngOnInit(): void {
  }

} 
