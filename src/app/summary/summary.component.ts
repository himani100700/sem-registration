import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private create:CreatestdService) { }
summary:any;
  ngOnInit(): void {
    this.create.getSummary().subscribe(data=>{
      console.warn(data)
      this.summary=data})
  }

}
