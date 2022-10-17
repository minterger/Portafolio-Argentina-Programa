import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProjectComponent } from './views/add-edit-project/add-edit-project.component';
import { AddEditSkillComponent } from './views/add-edit-skill/add-edit-skill.component';
import { AddEditStudiesComponent } from './views/add-edit-studies/add-edit-studies.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'add/project',
    component: AddEditProjectComponent,
  },
  {
    path: 'add/skill/:type',
    component: AddEditSkillComponent,
  },
  {
    path: 'add/studie',
    component: AddEditStudiesComponent,
  },

  {
    path: 'edit/project/:id',
    component: AddEditProjectComponent,
  },
  {
    path: 'edit/skill/:type/:id',
    component: AddEditSkillComponent,
  },
  {
    path: 'edit/studie/:id',
    component: AddEditStudiesComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
