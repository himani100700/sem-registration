import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatestdService {
  createstdUrl='https://registration-akgec.herokuapp.com/faculty/createStudent';
  constructor(private http: HttpClient) { }
  createStd(data) {
    return this.http.post(this.createstdUrl,data);
  }
}
