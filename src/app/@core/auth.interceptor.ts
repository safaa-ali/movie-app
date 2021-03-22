import { AuthService } from './../@app/auth/service/auth.service';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private pendingHTTPRequests$ = new Subject<void>();


  constructor(private _authService: AuthService) {
    console.log("token");

  }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userData = localStorage.AuthorizationData;
    const helper = new JwtHelperService();
    console.log("token");

    if (!userData) {
      const token = JSON.parse(localStorage.getItem('satellizer_token')); // you probably want to store it in localStorage or something
    console.log(token);

      if (token) {
        const isExpired = helper.isTokenExpired(token);
        if (isExpired) {

          this._authService.logout();
          this.pendingHTTPRequests$.next();
        }
      }
      const headers = new HttpHeaders({
        'Authorization': `Bearer   ${token}`,
      });
      const req1 = req.clone({ headers });


      return next.handle(req1);
    } else {
      return next.handle(req);
    }
  }

  // intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const userData = localStorage.user;
  //   if(userData){
  //     const token = localStorage.getItem('satellizer_token');
  //     const headers = new HttpHeaders({
  //       'Authorization': `Bearer ${token}`,

  //     });
  //     const req1 = httpRequest.clone({ headers });
  //     console.log(token);
  //     // console.log(httpRequest);
  //     console.log(req1);
  //     return next.handle(req1);
  //   }



  // }

}


