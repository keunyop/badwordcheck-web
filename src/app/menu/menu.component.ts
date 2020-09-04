import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    public basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById('side-menu').style.width = '250px';
  }

  closeNav() {
    document.getElementById('side-menu').style.width = '0';
  }
}
