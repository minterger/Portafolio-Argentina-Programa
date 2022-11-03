import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { StudiesComponent } from './components/studies/studies.component';
import { AddEditSkillComponent } from './views/add-edit-skill/add-edit-skill.component';
import { AddEditProjectComponent } from './views/add-edit-project/add-edit-project.component';
import { AddEditStudiesComponent } from './views/add-edit-studies/add-edit-studies.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    SkillsComponent,
    FooterComponent,
    ProjectsComponent,
    HomeComponent,
    LoginComponent,
    StudiesComponent,
    AddEditSkillComponent,
    AddEditProjectComponent,
    AddEditStudiesComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
