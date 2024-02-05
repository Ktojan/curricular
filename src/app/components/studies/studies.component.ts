import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Education } from '../../models/education';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  public studies: Education[] = [];
  public displayedColumns: string[] = ['years', 'subject', 'place'];
  public loaded = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection("education").subscribe(data => {
      this.studies = data;
    }, error => {
      console.log(error);
    }, () => { this.loaded =true; })
  }

}
