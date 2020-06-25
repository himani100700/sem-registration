import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestdService {
  
  createstdUrl='https://registration-akgec.herokuapp.com/faculty/createStudent';
  getstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllStudents';
  countUrl='https://registration-akgec.herokuapp.com/faculty/count';
  getregstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllRegistered';
  getsumUrl='https://registration-akgec.herokuapp.com/faculty/summery'
  registerUrl =  'https://registration-akgec.herokuapp.com/student/semesterRegister';
  createlibdueUrl = 'https://registration-akgec.herokuapp.com/faculty/createLibDue';
  createfacultyUrl= 'https://registration-akgec.herokuapp.com/faculty/createFaculty'
  loginstdUrl = 'https://registration-akgec.herokuapp.com/student/studentLogin'
  delstdUrl = 'https://registration-akgec.herokuapp.com/faculty/deleteStudent'

  constructor(private http: HttpClient) { }
  getStdlist() :Observable<any>{
   const url="https://registration-akgec.herokuapp.com/faculty/getAllStudents";
    return this.http.get<any>(url);
      }
  createStd(data) {
    return this.http.post(this.createstdUrl,data);
  }
  getCount(){
    return this.http.get(this.countUrl);
  }
  getRegstd(){
    return this.http.get(this.getregstdUrl);
  }
  getSummary(){
    return this.http.get(this.getsumUrl);
  }
 
  postregister(data) {
    return this.http.post(this.registerUrl, data );
  }
  createLibdue(data) {
    return this.http.post(this.createlibdueUrl, data );
  }
  createFaculty(data) {
    return this.http.post(this.createfacultyUrl,data);
  }
  loginStd(data){
    return this.http.post(this.loginstdUrl,data);
  }
  deleteStd(data){
    return this.http.delete(this.delstdUrl,data);
  }
} 
