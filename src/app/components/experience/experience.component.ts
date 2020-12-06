import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {

  public experiences: any[];
  public load = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.responseType = DataService.JSON;
    this.dataService.getData().subscribe(data => {
      this.experiences = data["experiences"];
      this.load = true;
    });
  }
}
