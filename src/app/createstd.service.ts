import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatestdService {
  
  createstdUrl='https://registration-akgec.herokuapp.com/faculty/createStudent';
  getstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllStudents';
  
  constructor(private http: HttpClient) { }
  getStdlist(){
    return this.http.get(this.getstdUrl);
      }
  createStd(data) {
    return this.http.post(this.createstdUrl,data);
  }
 
}
