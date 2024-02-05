import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { DataService } from '../../services/data.service';
import { DEFAULT_SKILL } from '../../shared/defaults';

export interface SkillColored extends Skill {
  classcolor: {
    color: string,
    class_progress: string
  };
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: SkillColored[] = [DEFAULT_SKILL];
  public loaded = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection('skills').subscribe(data => {
      this.loaded = true;
      this.skills = data;

      for (let skill of this.skills) {
        skill['classcolor'] = this.chooseColor(skill);
      }
    }, error => {
      console.log(error);
      this.loaded = true;
    });
  }

  chooseColor(skill: SkillColored) {

    let classcolor = { "color": '', "class_progress": '' };
    if (skill.value >= 80 && skill.value <= 100) {
      classcolor.color = "green";
      classcolor.class_progress = "bg-success";
    } else if (skill.value >= 70 && skill.value < 80) {
      classcolor.color = "blue";
      classcolor.class_progress = "bg-info";
    } else if (skill.value >= 40 && skill.value < 70) {
      classcolor.color = "yellow";
      classcolor.class_progress = "bg-warning";
    } else {
      classcolor.color = "red";
      classcolor.class_progress = "bg-danger";
    }

    return classcolor;
  }
}
