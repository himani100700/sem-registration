import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import {FormGroup, FormControl, Validators } from '@angular/forms' ;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private registerService:CreatestdService) { }
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
  .subscribe( s => {
    console.log('form submitted');
    this.alert=true
    this.userProfileForm.reset({})
  });
} 

  ngOnInit(): void {
  }

}
