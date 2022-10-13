import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css'],
})
export class AddSkillComponent implements OnInit {
  type: String = '';

  skill: any = {
    name: '',
    imgUrl: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((param) => {
      this.type = param['type'];
    });
  }

  addSkill() {
    console.log(this.skill);
    console.log(this.type);
  }

  ngOnInit(): void {
    if (!(this.type == 'framework' || this.type == 'lenguaje')) {
      this.router.navigateByUrl('');
    }
  }
}
