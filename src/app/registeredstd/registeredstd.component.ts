import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FacultypopupComponent } from '../facultypopup/facultypopup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-registeredstd',
  templateUrl: './registeredstd.component.html',
  styleUrls: ['./registeredstd.component.css']
})
export class RegisteredstdComponent implements OnInit {
Regstd:Array<any>
  totalRecords:string
  page:number=1
  constructor(private create:CreatestdService,public dialog: MatDialog) { 
    this.Regstd= new Array<any>()
    
  }
  openDialog() {
    this.dialog.open(FacultypopupComponent, {width: '250px', height: '290px'});
  }
regstd:any;
  ngOnInit(): void {
    this.create.getRegstd().subscribe((data=>{
      console.warn(data)
      this.regstd=data
    
    }))
  }

}
