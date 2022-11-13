import { Injectable } from '@angular/core';
import { Project } from '../interface/project';
import { Skill } from '../interface/skill';
import { Study } from '../interface/study';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  entryIsEmpty(object: Project | Skill | Study) {
    let isEmpty = false;

    Object.entries(object).forEach((key, value) => {
      if (!value) {
        isEmpty = true;
      }
    });
    return isEmpty;
  }
}
