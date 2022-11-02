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
    private skillsService: SkillsService,
    public loginService: LoginService
  ) {}

  obtenerSkills() {
    this.skillsService
      .getListSkillFramework()
      .subscribe((frameworks) => (this.frameworks = frameworks));
    this.skillsService
      .getListSkillLenguaje()
      .subscribe((lenguajes) => (this.lenguajes = lenguajes));
  }

  deleteSkill(id: number) {
    this.skillsService.deleteSkill(id).subscribe(() => {
      this.obtenerSkills();
    });
  }

  ngOnInit(): void {
    this.obtenerSkills();
  }
}
