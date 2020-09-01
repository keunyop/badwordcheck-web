import { Component, OnInit } from '@angular/core';
import { AlertDataService } from '../service/data/alert-data.service';
import { Alert } from '../document/document.component';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alert = new Alert(1, '', false, new Date());
    this.alertService
      .retrieveAlert('kevin', this.id)
      .subscribe((data) => (this.alert = data));
  }

  saveAlert() {
    this.alertService
      .updateTodo('kevin', this.id, this.alert)
      .subscribe((data) => {
        this.router.navigate(['document']);
      });
  }
}
