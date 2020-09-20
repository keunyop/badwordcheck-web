import { Component, OnInit } from '@angular/core';
import { AlertDataService } from '../service/data/alert-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


export class Alert {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  alerts: Alert[];
  alertTitle: string;
  alertMessage: string;
  message: string;

  constructor(
    private alertService: AlertDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    // this.refreshAlerts();
    this.alertTitle = '검사할 문서가 없습니다.';
    this.alertMessage = '블로그 금칙어 결과를 보려면 문서를 작성해 주세요.';
  }

  refreshAlerts() {
    this.alertService
      .retrieveAllAlerts(this.basicAuthenticationService.getAuthenticatedUser())
      .subscribe((response) => {
        this.alerts = response;
      });
  }

  deleteAlert(id) {
    this.alertService
      .deleteAlert(this.basicAuthenticationService.getAuthenticatedUser(), id)
      .subscribe((response) => {
        this.message = `Delete of Alert ${id} Successful!`;
      });

    this.refreshAlerts();
  }

  updateAlert(id) {
    this.router.navigate(['alerts', id]);
  }

  addAlert() {
    this.router.navigate(['alerts', -1]);
  }

  checkBadWords() {
    this.alertTitle = 'All Alerts';
    this.alertMessage = '';
  }

  editorAutoSize() {
    console.log("editorAutoSizing");
    this.autosize(document.querySelectorAll('textarea'));
  }
}
