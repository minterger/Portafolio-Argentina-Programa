import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../class/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getListSkillFramework(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.BaseUrl + '/framework');
  }

  getListSkillLenguaje(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.BaseUrl + '/lenguaje');
  }

  getById(id: number): Observable<Skill> {
    return this.http.get<Skill>(this.BaseUrl + '/' + id);
  }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.BaseUrl, skill);
  }

  editSkill(skill: Skill, id: number): Observable<Skill> {
    return this.http.put<Skill>(this.BaseUrl + '/' + id, skill);
  }

  deleteSkill(id: number): Observable<[string, boolean]> {
    return this.http.delete<[string, boolean]>(this.BaseUrl + '/' + id);
  }
}
