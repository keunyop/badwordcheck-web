import { Component, OnInit } from '@angular/core';
import { AlertDataService } from '../service/data/alert-data.service';
import { Router } from '@angular/router';

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

  constructor(private alertService: AlertDataService, private router: Router) {}

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

  updateAlert(id) {
    this.router.navigate(['alerts', id])
  }

  addAlert() {
    this.router.navigate(['alerts', -1])
  }
}
