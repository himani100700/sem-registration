import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CreatestdService } from './createstd.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorFacultyService {

  constructor(private injector: Injector) { }
  intercept(req, next){
    let facultyauthService = this.injector.get(CreatestdService)
    let tokenizedReq =req.clone({
      setHeaders: {
        Authorization: `Bearer ${facultyauthService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
