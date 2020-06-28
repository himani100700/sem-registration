import { Component, OnInit } from '@angular/core';
import { CreatestdService } from './../createstd.service';
import { FormGroup,FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  updatePassword= new FormGroup(
    {
    password: new FormControl('') ,
    newPassword: new FormControl(''),
    newPasswordConfirm: new FormControl(''),
  })
  constructor(private create: CreatestdService, private route:ActivatedRoute,private _route:Router) { }
  updatepassword()
  {
   console.warn(this.updatePassword.value);
    this.create.UpdatePassword(this.updatePassword.value).
    subscribe((result)=>{
      console.warn(result)
      alert("Password Successfully Changed, Please logIn again ")
    this.updatePassword.reset({})
    this._route.navigate(["faculty"]);
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
