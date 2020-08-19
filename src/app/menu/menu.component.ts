import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    public hardcodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {}

  openNav() {
    document.getElementById('side-menu').style.width = '250px';
  }

  closeNav() {
    document.getElementById('side-menu').style.width = '0';
  }
}
