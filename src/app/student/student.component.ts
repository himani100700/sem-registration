import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isLoading =false;
  loginStdData= new FormGroup({
    full_name: new FormControl(''),
    roll_no: new FormControl('') 
  }) ;


  constructor(private service: CreatestdService, private _router:Router,private toastr: ToastrService,) {
    
  } 
  errormsg:string;
  loginStd(){
    if (this.loginStdData.value.full_name=="" || this.loginStdData.value.roll_no=="" ) {
      this.toastr.warning("Please fill all fields first!", "Error",{
       closeButton:true,
       "positionClass": "toast-top-center",
     });
     return;
     }
     this.isLoading = true;
    this.service.loginStd(this.loginStdData.value).subscribe(
      res =>{ console.log(res);
        this.toastr.success("Login Successfull!","",{
          closeButton:true,
          "positionClass": "toast-top-center",
        })
        localStorage.setItem('token',res.token);
        this.isLoading = false;
        this._router.navigate(["proceed"]) ;
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