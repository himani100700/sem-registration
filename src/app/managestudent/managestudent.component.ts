import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FacultypopupComponent } from '../facultypopup/facultypopup.component';
@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.css']
})
export class ManagestudentComponent implements OnInit {
  Stdlist:Array<any>
  totalRecords:string
  page:number=1
  constructor(private create:CreatestdService,public dialog: MatDialog) { 
    this.Stdlist= new Array<any>()
    
  }
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
}
