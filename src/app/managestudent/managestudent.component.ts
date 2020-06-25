import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
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
  d:any;
  check:any;
  isLoading = false;
  isData = false;
  isdelete= false;
  isstoring=false;
  index:any;
  searchedStudent="";
  selectedStudent=[];
  selectedName=[];
  selectedStdNo=[];
  selectedBranch=[];
  selectedYear=[];
  selectedMobile=[];
  selectedEmail=[];
  selectedLateCount=[];
  selectedFineCount=[];
  booleanarray=[];
  len:number;
  constructor(private create:CreatestdService,public dialog: MatDialog,private fb: FormBuilder,) { 
    this.Stdlist= new Array<any>()
    
  }
  createstudent = this.fb.group({
    year: [""],
    branch: [""],
  });

  openDialog() {
    this.dialog.open(FacultypopupComponent, {width: '250px', height: '290px'});
  }
students: any;

  ngOnInit(): void {
    
    this.create.getStdlist().subscribe((data)=>{
console.log(data)
 this.students=data
 this.totalRecords=data.length
})
  }
  func2(page) {
    this.create
    .getfilterstdUrl(
        this.page,
        this.createstudent.value.branch,
        this.createstudent.value.year,
        this.searchedStudent
      )
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.isData = true;
          this.students = data.students;
          if(this.check==true){
            this.check=false;
            
          }
          
          
        },
        
      );
  }
}
