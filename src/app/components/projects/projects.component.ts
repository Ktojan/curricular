import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../../models/project';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    public comm_projects: Project[] = [];
    public pet_projects: Project[] = [];
    public loaded = false;

    constructor(private dataService: DataService, private sanitizer: DomSanitizer) { 
      }

    ngOnInit() {
        this.dataService.url = DataService.DATA;
        this.dataService.getSection('projects').subscribe(data => {
            this.comm_projects = data.filter((proj: { commercial: any; }) => proj.commercial);
            this.comm_projects.map(proj => {
                if (proj.media) proj.embLink = this.getEmbLink(proj.media) || '';
                return proj;
            }
            );
            this.pet_projects = data.filter((proj: { commercial: any; }) => !proj.commercial);
            this.loaded = true;
        });
    }

    getEmbLink(mediaLink: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(mediaLink);
    }

}
