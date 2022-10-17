import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-skill',
  templateUrl: './add-edit-skill.component.html',
  styleUrls: ['./add-edit-skill.component.css'],
})
export class AddEditSkillComponent implements OnInit {
  type: String = '';
  id: number = 0;

  skill: any = {
    name: '',
    imgUrl: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    route.params.subscribe((param) => {
      this.type = param['type'];
      this.id = param['id'];
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
