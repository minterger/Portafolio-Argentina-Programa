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
    public projectService: ProjectsService,
    public loginService: LoginService
  ) {}

  getListProjects(isDeleting?: boolean) {
    if (!isDeleting) this.projectService.loading = true;
    this.projectService.getListProject().subscribe(
      (projects) => {
        this.projectService.loading = false;
        this.projects = projects;
      },
      (error) => {
        this.projectService.loading = false;
        console.log(error);
      }
    );
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(
      () => {
        this.getListProjects(true);
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
