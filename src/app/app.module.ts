import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, KeyValuePipe } from '@angular/common';

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

import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { SharedStuffAndMaterialModule } from './shared/shared.module';
import { FxflexComponent } from './components/sandbox/fxflex/fxflex.component';
import { AnimationsComponent } from './components/sandbox/animations/animations.component';
import { HtmlApisComponent } from './components/sandbox/html-apis/html-apis.component';

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
    SandboxComponent,
    FxflexComponent,
    AnimationsComponent,
    HtmlApisComponent,
  ],
  imports: [
    SharedStuffAndMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    DataService,
    AsyncPipe,
    KeyValuePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
