import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username, password) {
    if (username === 'kevin' && password === '123') {
      return true;
    }

    return false;
  }
}
