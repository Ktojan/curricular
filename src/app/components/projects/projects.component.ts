import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    public comm_projects: any[];
    public pet_projects: any[];
    public comm_projects_number = 4;
    public load = false;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.url = DataService.DATA;
        this.dataService.responseType = DataService.JSON;
        this.dataService.getData().subscribe(data => {
            this.comm_projects = data["projects"].slice(0, this.comm_projects_number);
            this.pet_projects = data["projects"].slice(this.comm_projects_number);
            this.load = true;
        });
    }
}
