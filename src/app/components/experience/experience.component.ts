import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Experience } from '../../models/experience';

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styles: [
    `
      a {
        color: #3c1e2c;
      }
      a:hover {
        text-decoration: underline;
        color: #3c1e2c;
      }
      .fa {
        font-size: 25px;
        padding-right: 4px;
      }     
    `
  ]
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];
  loaded = false;
  showAchievs: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection("experiences").subscribe((data) => {
      this.experiences = data as Experience[];
      this.loaded = true;
    });
  }
}
