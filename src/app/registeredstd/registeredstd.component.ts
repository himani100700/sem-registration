import { Component, OnInit } from '@angular/core';
import { CreatestdService } from '../createstd.service';

@Component({
  selector: 'app-registeredstd',
  templateUrl: './registeredstd.component.html',
  styleUrls: ['./registeredstd.component.css']
})
export class RegisteredstdComponent implements OnInit {

  constructor(private service: CreatestdService) { }
regstd:any;
  ngOnInit(): void {
    this.service.getRegstd().subscribe((data=>{
      console.warn(data);
      this.regstd=data;
    }))
  }

}
