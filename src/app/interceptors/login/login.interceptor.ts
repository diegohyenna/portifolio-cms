import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const auth = request.clone({ setHeaders: { Authorization: 'Bearer' } });

    // return next.handle(auth);

    return next.handle(request);
  }
}
