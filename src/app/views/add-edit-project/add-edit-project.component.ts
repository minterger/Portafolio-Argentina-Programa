import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/class/project';
import { LoginService } from 'src/app/services/login.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css'],
})
export class AddEditProjectComponent implements OnInit {
  id: number = 0;

  token: string | null = '';

  tecnology: any = {
    name: '',
  };

  project: any = {
    name: '',
    imgUrl: '',
    description: '',
    linkProject: '',
    linkGithub: '',
    tecnologies: [],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public projectService: ProjectsService,
    public loginService: LoginService
  ) {
    route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  addTecnology() {
    this.project.tecnologies.push({ ...this.tecnology });
    this.tecnology.name = '';
  }

  deleteTecnology(i: number) {
    this.project.tecnologies.splice(i, 1);
  }

  addProject() {
    this.projectService.loading = true;
    if (this.id) {
      this.projectService.editProject(this.project, this.id).subscribe(
        (project) => {
          this.projectService.loading = false;
          this.router.navigate(['']);
        },
        (error) => {
          this.projectService.loading = false;
          console.log(error);
        }
      );
      return;
    }
    this.projectService.addProject(this.project).subscribe(
      (project) => {
        this.projectService.loading = false;
        this.router.navigate(['']);
      },
      (error) => {
        this.projectService.loading = false;
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    if (!this.loginService.token) {
      this.router.navigate(['']);
    }
    if (this.id) {
      this.projectService.getProject(this.id).subscribe(
        (project) => {
          this.project = project;
        },
        (error) => {
          this.loginService.viewError(error.status);
        }
      );
    }
  }
}
