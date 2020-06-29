import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  constructor(private service: CreatestdService) { }
countRegistered:any;
countLeft:any;
countStudent:any;
  ngOnInit(): void {

     this.service.getCount().subscribe((data=>{
      console.warn(data);
      this.countRegistered=data.data.registered;
      this.countStudent=data.data.student;
      this.countLeft=data.data.left;
    }))

}
}