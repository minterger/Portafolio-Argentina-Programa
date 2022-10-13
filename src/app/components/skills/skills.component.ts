import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Array<any> = [
    {
      name: 'HTML',
      level: '80%',
      imgUrl: 'assets/img/html.png' 
    },
    {
      name: 'CSS',
      level: '80%',
      imgUrl: 'assets/img/css.png'
    },
    {
      name: 'JavaScript',
      level: '80%',
      imgUrl: 'assets/img/javascript.png'
    },
    {
      name: 'TypeScript',
      level: '80%',
      imgUrl: 'assets/img/typescript.png'
    },
    {
      name: 'Java',
      level: '80%',
      imgUrl: 'assets/img/java.png'
    },
  ]

  frameworks:Array<any> = [
    {
      name: 'HTML',
      level: '80%',
      imgUrl: 'assets/img/html.png' 
    },
    {
      name: 'CSS',
      level: '80%',
      imgUrl: 'assets/img/css.png'
    },
    {
      name: 'JavaScript',
      level: '80%',
      imgUrl: 'assets/img/javascript.png'
    },
    {
      name: 'TypeScript',
      level: '80%',
      imgUrl: 'assets/img/typescript.png'
    },
    {
      name: 'Java',
      level: '80%',
      imgUrl: 'assets/img/java.png'
    },
  ]

  constructor() { }



  ngOnInit(): void {
  }

}
