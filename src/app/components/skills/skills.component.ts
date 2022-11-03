import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/class/skill';
import { LoginService } from 'src/app/services/login.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  lenguajes: Array<Skill> = [];

  frameworks: Array<Skill> = [];

  constructor(
    public skillsService: SkillsService,
    public loginService: LoginService
  ) {}

  obtenerSkills(isDeleting?: boolean) {
    if (!isDeleting) this.skillsService.loadingFrameworks = true;
    this.skillsService.getListSkillFramework().subscribe(
      (frameworks) => {
        this.skillsService.loadingFrameworks = false;

        this.frameworks = frameworks;
      },
      (error) => {
        this.skillsService.loadingFrameworks = false;
        console.log(error);
      }
    );

    if (!isDeleting) this.skillsService.loadinglenguajes = true;
    this.skillsService.getListSkillLenguaje().subscribe(
      (lenguajes) => {
        this.skillsService.loadinglenguajes = false;

        this.lenguajes = lenguajes;
      },
      (error) => {
        this.skillsService.loadinglenguajes = false;
        console.log(error);
      }
    );
  }

  deleteSkill(id: number) {
    this.skillsService.deleteSkill(id).subscribe(() => {
      this.obtenerSkills(true);
    });
  }

  ngOnInit(): void {
    this.obtenerSkills();
  }
}
