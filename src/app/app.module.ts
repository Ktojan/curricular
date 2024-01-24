import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

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
    MatTabsModule,
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { CdkTableModule } from '@angular/cdk/table';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectPageComponent } from './components/projects/project-page/project-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    StudiesComponent,
    ProjectsComponent,
    NotFoundPageComponent,
    ProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatRadioModule,
    CdkTableModule,
  ],
  providers: [
    DataService,
    AsyncPipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
