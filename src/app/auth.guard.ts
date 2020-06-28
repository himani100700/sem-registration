import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CreatestdService } from './createstd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service: CreatestdService, private _router:Router) {} 
  canActivate(): boolean {
    if(this.service.loggedIn()){
      return true
    }
   else {
    this._router.navigate([`student`])
    return false
  }
}
  
}
