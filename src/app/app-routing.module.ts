import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProjectAccessGuard } from './guards/project-access.guard';
import { SandboxComponent } from './components/sandbox/sandbox.component';

const APP_ROUTES: Routes = [
  {path: 'about', component: HomeComponent },
  {path: 'skills', component: SkillsComponent },
  {path: 'education', component: StudiesComponent, canActivate: [ProjectAccessGuard] },
  {path: 'experience', component: ExperienceComponent },
  {path: 'projects', component: ProjectsComponent },
  {path: 'sandbox', component: SandboxComponent },
  {path: '', pathMatch: 'full', redirectTo: 'about'},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
