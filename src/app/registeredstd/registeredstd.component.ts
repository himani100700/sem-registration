import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FacultypopupComponent } from '../facultypopup/facultypopup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Comment} from './comment'
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-registeredstd',
  templateUrl: './registeredstd.component.html',
  styleUrls: ['./registeredstd.component.css']
})
export class RegisteredstdComponent implements OnInit {
Stdlist:Array<any>
  totalRecords:string
  page:number;
  index:any
  len:number;
  constructor(private create:CreatestdService,public dialog: MatDialog,private fb: FormBuilder) { 
    this.Stdlist= new Array<any>()
    
  }
  createstudent = this.fb.group({
    branch: [""],
      year: [""],
    
  });
  openDialog() {
    this.dialog.open(FacultypopupComponent, {width: '250px', height: '290px'});
  }
students:Comment[];

  ngOnInit(): void {
    this.create.getRegstd().subscribe((data)=>{
      console.log(data)
       this.students=data.data
       this.totalRecords=data.length
      })
  }
  func2() {
    this.create.getfilterrgstUrl(
        this.createstudent.value.branch,
        this.createstudent.value.year    
      )
      .subscribe(
        (data) => {
          this.students = data.data;  
        },
        
      );
  }
}
