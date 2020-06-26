import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestdService {
  stdID;
  createstdUrl='https://registration-akgec.herokuapp.com/faculty/createStudent';
  getstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllStudents';
  countUrl='https://registration-akgec.herokuapp.com/faculty/count';
  getregstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllRegistered';
  getsumUrl='https://registration-akgec.herokuapp.com/faculty/summery'
  registerUrl =  'https://registration-akgec.herokuapp.com/student/semesterRegister';
  createlibdueUrl = 'https://registration-akgec.herokuapp.com/faculty/createLibDue';
  createfacultyUrl= 'https://registration-akgec.herokuapp.com/faculty/createFaculty'
  loginstdUrl = 'https://registration-akgec.herokuapp.com/student/studentLogin';
  logoutstdUrl = 'https://registration-akgec.herokuapp.com/student/logout';
<<<<<<< HEAD
  delstdUrl = 'https://registration-akgec.herokuapp.com/faculty/deleteStudent';
  filterstdUrl='http://registration-akgec.herokuapp.com/faculty/getFilteredStudents?';
  filterrgstUrl='https://registration-akgec.herokuapp.com/faculty/getFilteredRegistered?';
=======
  delstdUrl = 'http://sem-registration-akgec.herokuapp.com/faculty/deleteStudent/${this.stdID}';
  filterstdUrl='https://registration-akgec.herokuapp.com/faculty/getFilteredStudents';
  filterrgstUrl='https://registration-akgec.herokuapp.com/faculty/getFilteredRegistered';
>>>>>>> 90320aaffa4c76649b8ba1dfd52dedefdc236823
  stddueUrl= 'https://registration-akgec.herokuapp.com/student/studentDue'
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
  logoutStd(){
    return this.http.get(this.logoutstdUrl);
  }
<<<<<<< HEAD
  deleteStd(data){
    return this.http.delete(this.delstdUrl,data);
=======
  deleteStd(){
    return this.http.delete(this.delstdUrl);
  }
  stdDue(){
    return this.http.get(this.stddueUrl);
>>>>>>> 90320aaffa4c76649b8ba1dfd52dedefdc236823
  }
  stdDue(){
    return this.http.get(this.stddueUrl);
  }
  getfilterstdUrl(branch: string, year:string): Observable<any>{
    if(branch==''&& year=='')
    return this.http.get(this. filterstdUrl);
    else if(branch==''&& year!='')
    return this.http.get(this.filterstdUrl+"year="+year);
    else if(branch!=''&& year=='')
    return this.http.get(this.filterstdUrl+'branch='+branch);
    else
    return this.http.get(this.filterstdUrl+"year="+year+'&branch='+branch)
  }
  getfilterrgstUrl( branch: string, year: string): Observable<any>{
    if(branch==''&& year=='')
    return this.http.get(this. filterrgstUrl);
    else if(branch==''&& year!='')
    return this.http.get(this.filterrgstUrl+"year="+year);
    else if(branch!=''&& year=='')
    return this.http.get(this.filterrgstUrl+'branch='+branch);
    else
    return this.http.get(this.filterrgstUrl+"year="+year+'&branch='+branch)
  }
} 