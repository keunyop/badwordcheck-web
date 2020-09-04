import { Component, OnInit } from '@angular/core';
import { AlertDataService } from '../service/data/alert-data.service';
import { Alert } from '../document/document.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  id: number;
  alert: Alert;

  constructor(
    private alertService: AlertDataService,
    private route: ActivatedRoute,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alert = new Alert(this.id, '', false, new Date());

    if (this.id != -1) {
      this.alertService
        .retrieveAlert(this.basicAuthenticationService.getAuthenticatedUser(), this.id)
        .subscribe((data) => (this.alert = data));
    }
  }

  saveAlert() {
    let username = this.basicAuthenticationService.getAuthenticatedUser();

    if (this.id == -1) {
      this.alertService.createAlert(username, this.alert).subscribe((data) => {
        this.router.navigate(['document']);
      });
    } else {
      this.alertService
        .updateAlert(username, this.id, this.alert)
        .subscribe((data) => {
          this.router.navigate(['document']);
        });
    }
  }
}
