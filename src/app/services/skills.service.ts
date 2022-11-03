import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../class/skill';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/skill';

  loading: boolean = false;
  loadingFrameworks: boolean = false;
  loadinglenguajes: boolean = false;

  constructor(private http: HttpClient, public loginService: LoginService) {}

  getListSkillFramework(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.BaseUrl + '/framework');
  }

  getListSkillLenguaje(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.BaseUrl + '/lenguaje');
  }

  getById(id: number): Observable<Skill> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.get<Skill>(this.BaseUrl + '/' + id, Options);
  }

  addSkill(skill: Skill): Observable<Skill> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.post<Skill>(this.BaseUrl, skill, Options);
  }

  editSkill(skill: Skill, id: number): Observable<Skill> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.put<Skill>(this.BaseUrl + '/' + id, skill, Options);
  }

  deleteSkill(id: number): Observable<[string, boolean]> {
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
