import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {

  constructor(private create:CreatestdService,private _router:Router) { }
  logoutStd(){
    this.create.logoutStd().subscribe(data=>{
      this._router.navigate(["home"])
      console.warn(data);
    })
  }

  
  ngOnInit(): void {}

}