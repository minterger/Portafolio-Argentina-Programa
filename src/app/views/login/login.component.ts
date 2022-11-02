import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = {
    userName: '',
    password: '',
  };

  error: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  sendLogin() {
    this.loginService.sendLogin(this.loginForm).subscribe(
      (data) => {
        this.loginService.setToken(data.token);
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
        this.error = error.error.message;
      }
    );
  }

  ngOnInit(): void {
    if (this.loginService.token) {
      this.router.navigate(['']);
    }
  }
}
