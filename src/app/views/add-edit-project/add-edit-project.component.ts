import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/class/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css'],
})
export class AddEditProjectComponent implements OnInit {
  id: number = 0;

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
    private projectService: ProjectsService
  ) {
    route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  addTecnology() {
    this.project.tecnologies.push({...this.tecnology});
    this.tecnology.name = ""
    
  }

  deleteTecnology(i: number) {
    this.project.tecnologies.splice(i, 1);
  }

  addProject() {
    this.projectService.addProject(this.project).subscribe(
      (project) => {
        this.router.navigate(['']);
        console.log(project);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
}
