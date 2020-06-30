import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { CreatestdService } from './createstd.service'
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next){
    let authService = this.injector.get(CreatestdService)
    let tokenizedReq =req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
 