import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  name = localStorage.getItem('user_name');
  email = localStorage.getItem('user_email');
  userEmailVerifiedAt = localStorage.getItem('user_email_verified_at');
  ngOnInit() {
  }

}
