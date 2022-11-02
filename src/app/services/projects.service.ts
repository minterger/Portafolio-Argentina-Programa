import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../class/project';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/project';

  constructor(private http: HttpClient, public loginService: LoginService) {}

  getListProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.BaseUrl);
  }

  getProject(id: number): Observable<Project> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.get<Project>(this.BaseUrl + '/' + id, Options);
  }

  addProject(project: Project): Observable<Project> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.post<Project>(this.BaseUrl, project, Options);
  }

  editProject(project: Project, id: number): Observable<Project> {
    let Options = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + this.loginService.token,
      }),
    };
    return this.http.put<Project>(this.BaseUrl + '/' + id, project, Options);
  }

  deleteProject(id: number): Observable<[string, boolean]> {
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
