import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import {FormGroup, FormControl, Validators } from '@angular/forms' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private registerService:CreatestdService ,  private _router:Router) { }
  alert:boolean=false
  userProfileForm = new FormGroup ({
    full_name: new FormControl('', Validators.required),
    student_no: new FormControl('', Validators.required),
    roll_no: new FormControl('', Validators.required),
    session: new FormControl('', Validators.required),
    semester: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    branch: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    father_name: new FormControl('', Validators.required),
   address: new FormControl('', Validators.required),
   year: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log(this.userProfileForm);
    this.registerService.postregister(this.userProfileForm.value)
  .subscribe(
     s => {
    console.log('form submitted');
    this.alert=true
    this.userProfileForm.reset({})
    this._router.navigate(["submitted"])
  },
   err =>{ console.log(err)
    this.alert=true
  }
  );
} 
 logoutStd(){
    this.registerService.logoutStd().subscribe(data=>{
    this._router.navigate(["home"])
    console.warn(data);
  })
 }
  ngOnInit(): void {
  }

}
