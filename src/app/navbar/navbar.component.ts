import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login-form/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  menu: boolean = false

  constructor(public service: AuthService){}

  logout(){

    this.service.logout()

  }

}
