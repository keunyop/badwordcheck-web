import { Component, OnInit } from '@angular/core';
import { AlertDataService } from '../service/data/alert-data.service';

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

  constructor(private alertService: AlertDataService) {}

  ngOnInit(): void {
    this.alertService.retrieveAllAlerts('kevin').subscribe((response) => {
      this.alerts = response;
    });
  }
}
