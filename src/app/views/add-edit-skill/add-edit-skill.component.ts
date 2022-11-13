import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/interface/skill';
import { AppService } from 'src/app/services/app.service';
import { LoginService } from 'src/app/services/login.service';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-edit-skill',
  templateUrl: './add-edit-skill.component.html',
  styleUrls: ['./add-edit-skill.component.css'],
})
export class AddEditSkillComponent implements OnInit {
  id: number = 0;

  token: string | null = '';

  messageError = '';

  skill: Skill = {
    name: '',
    imgUrl: '',
    type: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public skillsService: SkillsService,
    public loginService: LoginService,
    private appService: AppService
  ) {
    route.params.subscribe((param) => {
      this.skill.type = param['type'];
      this.id = param['id'];
    });
  }

  addSkill() {
    this.skillsService.loading = true;
    if (this.id) {
      this.skillsService.editSkill(this.skill, this.id).subscribe(
        () => {
          this.skillsService.loading = false;
          this.router.navigate(['']);
        },
        (error) => {
          this.loginService.viewError(error.status);

          this.skillsService.loading = false;
          console.log(error);
        }
      );
      return;
    }
    this.skillsService.addSkill(this.skill).subscribe(
      () => {
        this.skillsService.loading = false;
        this.router.navigate(['']);
      },
      (error) => {
        this.loginService.viewError(error.status);

        this.skillsService.loading = false;
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    if (!this.loginService.token) {
      this.router.navigate(['']);
    }
    if (!(this.skill.type == 'framework' || this.skill.type == 'lenguaje')) {
      this.router.navigateByUrl('');
    }

    if (this.id) {
      this.skillsService.getById(this.id).subscribe(
        (skill) => {
          this.skill = skill;
        },
        (error) => {
          this.loginService.viewError(error.status);
        }
      );
    }
  }
}
