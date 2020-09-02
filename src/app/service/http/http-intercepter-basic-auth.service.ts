import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'kevin';
    let password = 'dummy';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });

    return next.handle(request);
  }
}
