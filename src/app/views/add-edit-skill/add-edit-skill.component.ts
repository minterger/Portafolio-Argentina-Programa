import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  skill: any = {
    name: '',
    imgUrl: '',
    type: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public skillsService: SkillsService,
    public loginService: LoginService
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
          this.skillsService.loading = false;
          console.log(error);
        }
      );
      return;
    }
    this.skillsService.addSkill(this.skill).subscribe(
      (skill) => {
        this.skillsService.loading = false;
        this.router.navigate(['']);
      },
      (error) => {
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
