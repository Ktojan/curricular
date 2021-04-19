import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Project } from '../../../models/project';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  project: Project = {
    name: 'Garold',
    tech: '',
    commercial: true
  };

  constructor( private dataService: DataService, private route: ActivatedRoute,) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params =>
    // // switchMap((params: ParamMap) =>
    // {
    //   this.dataService.getProject(params.get('id')!).subscribe(res => this.project = (res as unknown as Project));
    // }
    // );
  }

}
