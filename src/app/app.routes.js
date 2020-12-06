"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var skills_component_1 = require("./components/skills/skills.component");
var studies_component_1 = require("./components/studies/studies.component");
var experience_component_1 = require("./components/experience/experience.component");
var projects_component_1 = require("./components/projects/projects.component");
var APP_ROUTES = [
    { path: 'about', component: home_component_1.HomeComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent },
    { path: 'education', component: studies_component_1.StudiesComponent },
    { path: 'experience', component: experience_component_1.ExperienceComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'about' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map