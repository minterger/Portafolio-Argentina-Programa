import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/auth';

  token: string | null = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  sendLogin(loginForm: any): Observable<any> {
    return this.http.post<any>(this.BaseUrl + '/login', loginForm);
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  viewError(code: number) {
    if (code === 401) {
      this.logout();
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
  }

  getToken() {
    this.token = localStorage.getItem('token');
  }
}
