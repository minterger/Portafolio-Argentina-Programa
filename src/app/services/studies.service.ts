import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from '../class/study';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class StudiesService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/study';

  constructor(private http: HttpClient, public loginService: LoginService) {}

  getListStudies(): Observable<Study[]> {
    return this.http.get<Study[]>(this.BaseUrl);
  }

  getStudy(id: number): Observable<Study> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.get<Study>(this.BaseUrl + '/' + id, Options);
  }

  addStudy(study: Study): Observable<Study> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.post<Study>(this.BaseUrl, study, Options);
  }

  editStudy(study: Study, id: number): Observable<Study> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.put<Study>(this.BaseUrl + '/' + id, study, Options);
  }

  deleteStudy(id: number): Observable<[string, boolean]> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.delete<[string, boolean]>(
      this.BaseUrl + '/' + id,
      Options
    );
  }
}
