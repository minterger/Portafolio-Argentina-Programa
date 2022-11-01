import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Study } from '../class/study';

@Injectable({
  providedIn: 'root',
})
export class StudiesService {
  private BaseUrl = 'https://ap-portafolio-backend.herokuapp.com/';

  constructor(private http: HttpClient) {}

  getListStudies(): Observable<Study[]> {
    return this.http.get<Study[]>(this.BaseUrl);
  }

  getStudy(id: number): Observable<Study> {
    return this.http.get<Study>(this.BaseUrl + '/' + id);
  }

  addStudy(study: Study): Observable<Study> {
    return this.http.post<Study>(this.BaseUrl, study);
  }

  editStudy(study: Study, id: number): Observable<Study> {
    return this.http.put<Study>(this.BaseUrl + '/' + id, study);
  }

  deleteStudy(id: number): Observable<[string, boolean]> {
    return this.http.delete<[string, boolean]>(this.BaseUrl + '/' + id);
  }
}
