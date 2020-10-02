import { API_URL } from '../../app.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from 'src/app/document/document.component';

@Injectable({
  providedIn: 'root',
})
export class AlertDataService {
  constructor(private http: HttpClient) {}

  retrieveAllAlerts(username) {
    return this.http.get<Alert[]>(`${API_URL}/users/${username}/alerts`);
  }

  retrieveAlert(username, id) {
    return this.http.get<Alert>(`${API_URL}/users/${username}/alerts/${id}`);
  }

  deleteAlert(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/alerts/${id}`);
  }

  updateAlert(username, id, alert) {
    return this.http.put(`${API_URL}/users/${username}/alerts/${id}`, alert);
  }

  createAlert(username, alert) {
    return this.http.post(`${API_URL}/users/${username}/alerts`, alert);
  }

  checkBadWords() {
    return this.http.get<Alert[]>(`${API_URL}/alerts`);
  }
}
