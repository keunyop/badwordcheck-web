import { Component, OnInit } from '@angular/core';

export class Alert {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  alerts = [
    new Alert(1, 'Correctness', false, new Date()),
    new Alert(2, 'Clarity', false, new Date()),
    new Alert(3, 'Engagement', false, new Date())
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
