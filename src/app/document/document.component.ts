import { Component, OnInit } from '@angular/core';
import { AlertDataService } from '../service/data/alert-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import * as autosize from 'autosize';

export class Alert {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

export class CheckResult {
  constructor(
    public badwords: Map<String, number>,
    public keywords: Map<string, number>
  ) {}
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
})
export class DocumentComponent implements OnInit {
  alerts: Alert[];
  badwords: Map<String, number>;
  keywords: Map<String, number>;
  alertTitle: string;
  alertMessage: string;
  // message: string;
  documentContents: string;
  docTextLength: number;
  typingCount: number;

  constructor(
    private alertService: AlertDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {
    // this.refreshAlerts();
    this.alertTitle = '검사할 본문이 없습니다.';
    this.alertMessage = '블로그 금지어 결과를 보려면 본문을 작성해 주세요.';
    this.docTextLength = 0;
    this.typingCount = 0;
  }

  // refreshAlerts() {
  //   this.alertService
  //     .retrieveAllAlerts(this.basicAuthenticationService.getAuthenticatedUser())
  //     .subscribe((response) => {
  //       this.alerts = response;
  //     });
  // }

  // deleteAlert(id) {
  //   this.alertService
  //     .deleteAlert(this.basicAuthenticationService.getAuthenticatedUser(), id)
  //     .subscribe((response) => {
  //       this.message = `Delete of Alert ${id} Successful!`;
  //     });

  //   this.refreshAlerts();
  // }

  // updateAlert(id) {
  //   this.router.navigate(['alerts', id]);
  // }

  // addAlert() {
  //   this.router.navigate(['alerts', -1]);
  // }

  monitorDocumentEditor() {
    this.resizeDocumentEditor();

    if (
      this.documentContents.length - this.docTextLength > 10 ||
      this.docTextLength - this.documentContents.length > 10 ||
      ++this.typingCount > 5
    ) {
      this.checkBadWords();
    }

    this.docTextLength = this.documentContents.length;
  }

  resizeDocumentEditor() {
    autosize(document.getElementsByName('document-editor'));
  }

  checkBadWords() {
    this.alertTitle = 'All Alerts';
    this.alertMessage = '';
    this.typingCount = 0;

    this.alertService.checkBadWords(this.documentContents).subscribe((response: CheckResult) => {
      this.badwords = response.badwords;
      this.keywords = response.keywords;
    });

  }
}
