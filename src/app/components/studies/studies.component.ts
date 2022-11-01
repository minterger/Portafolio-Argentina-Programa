import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/class/study';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css'],
})
export class StudiesComponent implements OnInit {
  studies: Array<any> = [];

  constructor(private studyService: StudiesService) {}

  deleteStudy(id: number) {
    this.studyService.deleteStudy(id).subscribe((data) => {
      this.getListStudies();
    });
  }

  getListStudies() {
    this.studyService.getListStudies().subscribe((data) => {
      this.studies = data;
    });
  }

  ngOnInit(): void {
    this.getListStudies();
  }
}
