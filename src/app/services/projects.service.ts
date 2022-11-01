import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../class/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getListProject(): Observable<Project[]> {
    return this.http.get<Project[]>(this.BaseUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.BaseUrl, project);
  }
}
