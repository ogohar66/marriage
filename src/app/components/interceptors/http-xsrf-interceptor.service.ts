import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpXsrfTokenExtractor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpXsrfInterceptor implements HttpInterceptor {
  headerName = 'X-XSRF-TOKEN';

  constructor(private tokenService: HttpXsrfTokenExtractor,
              private cookie:CookieService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   

    const token = this.tokenService.getToken();

    // Be careful not to overwrite an existing header of the same name.
    if (token !== null && !req.headers.has(this.headerName)) {
      req = req.clone({headers: req.headers.set(this.headerName, token)});
    }
    req=req.clone({withCredentials:true})
    return next.handle(req);
  }
  
}