import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-registeredstd',
  templateUrl: './registeredstd.component.html',
  styleUrls: ['./registeredstd.component.css']
})
export class RegisteredstdComponent implements OnInit {
Regstd:Array<any>
  totalRecords:string
  page:number=1
  constructor(private create:CreatestdService) { 
    this.Regstd= new Array<any>()
    
  }
regstd:any;
  ngOnInit(): void {
    this.create.getRegstd().subscribe((data=>{
      console.warn(data)
      this.regstd=data
      this.Regstd=data.results
  this.totalRecords=data.results.length
    }))
  }

}
