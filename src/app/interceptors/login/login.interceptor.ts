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
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // localStorage.setItem('token', 'hushgugusagdig');
    // if (!this.loginService.isLogged()) {
    //   this.router.navigate(['/login']);
    // }

    alert('arroz');

    const auth = request.clone({ setHeaders: { Authorization: 'Bearer' } });

    return next.handle(auth);

    return next.handle(request);
  }
}
