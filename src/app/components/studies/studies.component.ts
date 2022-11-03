import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/class/study';
import { LoginService } from 'src/app/services/login.service';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  studies: Array<any> = [];

  constructor(
    public studyService: StudiesService,
    public loginService: LoginService
  ) {}

  deleteStudy(id: number) {
    this.studyService.deleteStudy(id).subscribe(
      (data) => {
        this.getListStudies(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getListStudies(isDeleting?: boolean) {
    if (!isDeleting) this.studyService.loading = true;
    this.studyService.getListStudies().subscribe(
      (data) => {
        this.studyService.loading = false;
        this.studies = data;
      },
      (error) => {
        this.studyService.loading = false;
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getListStudies();
  }
}
