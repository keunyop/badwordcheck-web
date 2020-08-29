import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'src/app/document/document.component';

@Injectable({
  providedIn: 'root',
})
export class AlertDataService {
  constructor(private http: HttpClient) {}

  retrieveAllAlerts(username) {
    return this.http.get<Alert[]>(
      `http://localhost:8081/users/${username}/alerts`
    );
  }

  retrieveAlert(username, id) {
    return this.http.get<Alert>(
      `http://localhost:8081/users/${username}/alerts/${id}`
    );
  }

  deleteAlert(username, id) {
    return this.http.delete(
      `http://localhost:8081/users/${username}/alerts/${id}`
    );
  }
}
