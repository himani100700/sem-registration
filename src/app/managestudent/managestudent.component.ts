
import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.css']
})
export class ManagestudentComponent implements OnInit {
  constructor(private create:CreatestdService) { }
students: any;

  ngOnInit(): void {
    
    this.create.getStdlist().subscribe((data)=>{
console.warn(data);
this.students=data;
    })
  }

}
