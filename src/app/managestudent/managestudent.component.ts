import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Comments } from './comments'
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FacultypopupComponent } from '../facultypopup/facultypopup.component';
import { FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.css']
})
export class ManagestudentComponent implements OnInit {
  
  Stdlist:Array<any>
  totalRecords:string
  page:number=1
  index:any;

  len:number;
  constructor(private create:CreatestdService,private fb: FormBuilder,public dialog: MatDialog) { 
    this.Stdlist= new Array<any>()
    
  }
  createstudent = this.fb.group({
    branch: [""],
      year: [""],
    
  });

  openDialog() {
    this.dialog.open(FacultypopupComponent, {width: '250px', height: '290px'});
  }
students: Comments[];

  ngOnInit(): void {
    
    this.create.getStdlist().subscribe((data)=>{
console.log(data)
 this.students=data.data
 this.totalRecords=data.length
})
  }
  func2() {
    this.create.getfilterstdUrl(
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