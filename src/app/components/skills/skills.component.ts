import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: any[];
  public load = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.responseType = DataService.JSON;
    this.dataService.getData().subscribe(data => {
      this.skills = data["skills"];

      for (let skill of this.skills) {
        skill.class_color = this.chooseColor(skill);
      }
      this.load = true;
    }, error => {
      console.log(error);
      this.load = true;
    });
  }

  chooseColor(skill: any) {

    let class_color = { "color": '', "class_progress": '' };
    if (skill.value >= 80 && skill.value <= 100) {
      class_color.color = "green";
      class_color.class_progress = "bg-success";
    } else if (skill.value >= 60 && skill.value < 80) {
      class_color.color = "blue";
      class_color.class_progress = "bg-info";
    } else if (skill.value >= 40 && skill.value < 60) {
      class_color.color = "yellow";
      class_color.class_progress = "bg-warning";
    } else {
      class_color.color = "red";
      class_color.class_progress = "bg-danger";
    }

    return class_color;
  }
}
