import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { APP_ROUTING } from './app.routes';

// Componets
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StudiesComponent } from './components/studies/studies.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { DataService } from './services/data.service'

import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    StudiesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    CdkTableModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
