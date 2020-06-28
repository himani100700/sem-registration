import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestdService {
  stdID;
  ID;
  logindata;
  createstdUrl='https://registration-akgec.herokuapp.com/faculty/createStudent';
  getstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllStudents';
  countUrl='https://registration-akgec.herokuapp.com/faculty/count';
  getregstdUrl='https://registration-akgec.herokuapp.com/faculty/getAllRegistered';
  getsumUrl='https://registration-akgec.herokuapp.com/faculty/summery'
  registerUrl =  'https://registration-akgec.herokuapp.com/student/semesterRegister';
  createlibdueUrl = 'https://registration-akgec.herokuapp.com/faculty/createLibDue';
  createfacultyUrl= 'https://registration-akgec.herokuapp.com/faculty/createFaculty'
  logoutstdUrl = 'https://registration-akgec.herokuapp.com/student/logout';
  filterstdUrl='https://registration-akgec.herokuapp.com/faculty/getFilteredStudents?';
  filterrgstUrl='https://registration-akgec.herokuapp.com/faculty/getFilteredRegistered?';
  loginfacultyUrl = 'https://registration-akgec.herokuapp.com/faculty/facultyLogin';
  logoutfacultyUrl = 'https://registration-akgec.herokuapp.com/faculty/logout';
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
  getRegstd():Observable<any>{
    const url="https://registration-akgec.herokuapp.com/faculty/getAllRegistered";
    return this.http.get<any>(url);
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
  loginStd(data):Observable<any>{
    const url=`https://registration-akgec.herokuapp.com/student/studentLogin`;
    return this.http.post<any>(url,data);
  }
  logoutStd(){
    return this.http.get(this.logoutstdUrl);
  }
  stdDue():Observable<any>{
    const stddueUrl= 'https://registration-akgec.herokuapp.com/student/studentDue'
    return this.http.get<any>(stddueUrl);
  }
  deleteStd(stdID: number):Observable<any>{
    const Url=`http://registration-akgec.herokuapp.com/faculty/deleteStudent`
    return this.http.delete(`${Url}/${stdID}`);
  }
  UpdateFaculty(data):Observable<any>{
    const Url=`https://registration-akgec.herokuapp.com/faculty/updateFaculty`
    return this.http.patch(Url,data);
  }
  UpdatePassword(data):Observable<any>{
    const Url=`https://registration-akgec.herokuapp.com/faculty/updatePassword`
    return this.http.patch(Url,data);
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
  facultyLogin(data){
    return this.http.post(this.loginfacultyUrl,data);
  }
  facultyLogout(){
    return this.http.get(this.logoutfacultyUrl);
  }

  
} 