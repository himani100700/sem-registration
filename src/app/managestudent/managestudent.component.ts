
import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.css']
})
export class ManagestudentComponent implements OnInit {
  Stdlist:Array<any>
  totalRecords:string
  page:number=1
  constructor(private create:CreatestdService) { 
    this.Stdlist= new Array<any>()
    
  }
  students: any;
  getUsers(){
    this.create.getStdlist().subscribe((data)=>{
      console.warn(data)
      this.students=data
       this.Stdlist=data.results
       this.totalRecords=data.results.length
  })
  }

  ngOnInit(): void {
}
}