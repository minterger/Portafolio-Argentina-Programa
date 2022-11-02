import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/auth';

  token: string | null = '';

  constructor(private http: HttpClient) {}

  sendLogin(loginForm: any): Observable<any> {
    return this.http.post<any>(this.BaseUrl + '/login', loginForm);
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
  }

  getToken() {
    this.token = localStorage.getItem('token');
  }
}
