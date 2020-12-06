import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'
import { SkillsComponent } from './components/skills/skills.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';

const APP_ROUTES: Routes = [
    {path: 'about', component: HomeComponent },
    {path: 'skills', component: SkillsComponent },
    {path: 'education', component: StudiesComponent },
    {path: 'experience', component: ExperienceComponent },
    {path: 'projects', component: ProjectsComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'about'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);