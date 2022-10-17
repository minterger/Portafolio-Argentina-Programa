import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-studies',
  templateUrl: './add-edit-studies.component.html',
  styleUrls: ['./add-edit-studies.component.css'],
})
export class AddEditStudiesComponent implements OnInit {
  id: number = 0;

  studie: any = {
    name: '',
    imgUrl: '',
    titulo: '',
    modalidad: '',
  };

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((param) => {
      this.id = param['id'];
    });
  }

  ngOnInit(): void {}

  addStudie() {}
}
