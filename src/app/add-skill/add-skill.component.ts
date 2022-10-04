import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css'],
})
export class AddSkillComponent implements OnInit {
  type: String = '';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((param) => {
      this.type = param['type'];
    });
  }

  ngOnInit(): void {}
}
