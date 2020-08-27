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
  message: string;

  constructor(private alertService: AlertDataService) {}

  ngOnInit(): void {
    this.refreshAlerts();
  }

  refreshAlerts() {
    this.alertService.retrieveAllAlerts('kevin').subscribe((response) => {
      this.alerts = response;
    });
  }

  deleteAlert(id) {
    this.alertService.deleteAlert('kevin', id).subscribe((response) => {
      this.message = `Delete of Alert ${id} Successful!`;
    });

    this.refreshAlerts();
  }
}
