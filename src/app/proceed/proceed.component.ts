import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {

  constructor(private service: CreatestdService, private _router:Router) { }
   checkdues()
   {
    this._router.navigate(["form"]);
    //  this.service.stdDue().subscribe(
    //    data=>{console.warn(data)
    //     this._router.navigate(["form"]);},
    //   err =>{ 
    //     console.warn(err)
    //     alert("Please clear out your dues before you proceed")
    //   })
    //   console.warn(this.service.logindata)
   }
  ngOnInit(): void {
  }

}
