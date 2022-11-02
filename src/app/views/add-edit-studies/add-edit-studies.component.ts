import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Study } from 'src/app/class/study';
import { LoginService } from 'src/app/services/login.service';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-add-edit-studies',
  templateUrl: './add-edit-studies.component.html',
  styleUrls: ['./add-edit-studies.component.css'],
})
export class AddEditStudiesComponent implements OnInit {
  id: number = 0;

  token: string | null = '';

  studie: Study = {
    name: '',
    imgUrl: '',
    title: '',
    modality: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studyService: StudiesService,
    public loginService: LoginService
  ) {
    route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  addStudie() {
    if (this.id) {
      this.studyService.editStudy(this.studie, this.id).subscribe((data) => {
        this.router.navigate(['']);
      });
      return;
    }
    this.studyService.addStudy(this.studie).subscribe((data) => {
      this.router.navigate(['']);
    });
  }
  ngOnInit(): void {
    if (!this.loginService.token) {
      this.router.navigate(['']);
    }
    if (this.id) {
      this.studyService.getStudy(this.id).subscribe((data) => {
        this.studie = data;
      });
    }
  }
}
