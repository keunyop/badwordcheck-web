import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("side-menu").style.width = "250px";
  }
  
  closeNav() {
    document.getElementById("side-menu").style.width = "0";
  }

}
