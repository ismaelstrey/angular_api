import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  login(email: string, password: string) {
    this.authService.login(email, password).subscribe(
      success => this.router.navigate(['list']),
      error => this.error = error
    );
  }

}
