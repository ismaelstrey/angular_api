import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name = localStorage.getItem('user_name');
 email = localStorage.getItem('user_email');
 userEmailVerifiedAt = localStorage.getItem('user_email_verified_at');
  constructor() { }

  ngOnInit() {
  }

}
