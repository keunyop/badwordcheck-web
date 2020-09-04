import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class AuthenticationBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  authenticate(username, password) {
    if (username === 'kevin' && password === '123') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }

    return false;
  }

  executeAuthenticationService(username, password) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });

    return this.http
      .get<AuthenticationBean>(`http://localhost:8081/basicauth`, { headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticaterUser', username);
          return data;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
  }
}
