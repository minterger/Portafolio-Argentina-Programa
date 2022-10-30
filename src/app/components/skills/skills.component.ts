import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  lenguajes: Array<any> = [
    {
      id: 12312123,
      name: 'HTML',
      imgUrl: 'assets/img/html.png',
    },
    {
      id: 12312123,
      name: 'CSS',
      imgUrl: 'assets/img/css.png',
    },
    {
      id: 12312123,
      name: 'JavaScript',
      imgUrl: 'assets/img/javascript.png',
    },
    {
      id: 12312123,
      name: 'TypeScript',
      imgUrl: 'assets/img/typescript.png',
    },
    {
      id: 12312123,
      name: 'Java',
      imgUrl: 'assets/img/java.png',
    },
  ];

  frameworks: Array<any> = [
    {
      id: 12312123,
      name: 'HTML',
      imgUrl: 'assets/img/html.png',
    },
    {
      id: 12312123,
      name: 'CSS',
      imgUrl: 'assets/img/css.png',
    },
    {
      id: 12312123,
      name: 'JavaScript',
      imgUrl: 'assets/img/javascript.png',
    },
    {
      id: 12312123,
      name: 'TypeScript',
      imgUrl: 'assets/img/typescript.png',
    },
    {
      id: 12312123,
      name: 'Java',
      imgUrl: 'assets/img/java.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
