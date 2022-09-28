import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptor } from './login/login.interceptor';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true },
];
