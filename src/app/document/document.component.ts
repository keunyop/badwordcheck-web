import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  alerts = [
    {id:1, description:'Correctness'},
    {id:2, description:'Clarity'},
    {id:3, description:'Engagement'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
