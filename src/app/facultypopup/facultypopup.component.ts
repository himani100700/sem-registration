import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-facultypopup',
  templateUrl: './facultypopup.component.html',
  styleUrls: ['./facultypopup.component.css']
})
export class FacultypopupComponent implements OnInit {

  constructor(public create:CreatestdService,private _router:Router) { }
  // logoutFaculty(){
  //   this.create.facultyLogout().subscribe(data=>{
  //     this._router.navigate(["home"])
  //     console.warn(data);
  //   })
  // }

  ngOnInit(): void {
  }

}
 