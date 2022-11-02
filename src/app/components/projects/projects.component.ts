import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { LoginService } from 'src/app/services/login.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project> = [];

  constructor(
    private projectService: ProjectsService,
    public loginService: LoginService
  ) {}

  getListProjects() {
    this.projectService.getListProject().subscribe(
      (projects) => {
        this.projects = projects;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(
      () => {
        this.getListProjects();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.getListProjects();
  }
}
