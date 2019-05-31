import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private location: Location) {

  }
  name = localStorage.getItem('user_name');
  email = localStorage.getItem('user_email');
  userEmailVerifiedAt = localStorage.getItem('user_email_verified_at');
  ngOnInit() {
  }
  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigate(['home']);
    location.reload();
  }

}
