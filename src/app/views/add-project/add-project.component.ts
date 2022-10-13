import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
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

  constructor() {}

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
