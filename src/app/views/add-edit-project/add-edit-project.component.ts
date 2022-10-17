import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-project',
  templateUrl: './add-edit-project.component.html',
  styleUrls: ['./add-edit-project.component.css'],
})
export class AddEditProjectComponent implements OnInit {
  id: number = 0;

  tecnologia: any = {
    name: '',
  };

  project: any = {
    name: '',
    imgUrl: '',
    description: '',
    linkProject: '',
    linkGithub: '',
    tecnologias: [],
  };

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  addTecnologia() {
    this.project.tecnologias.push(this.tecnologia.name);
  }

  deleteTecnologia(i: number) {
    this.project.tecnologias.splice(i, 1);
  }

  addProject() {
    console.log(this.project);
  }

  ngOnInit(): void {}
}
