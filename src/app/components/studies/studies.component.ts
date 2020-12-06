import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  public studies: any[];
  public displayedColumns: string[] = ['years', 'subject', 'place'];
  public load = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.responseType = DataService.JSON;
    this.dataService.getData().subscribe(data => {
      this.studies = data["education"];
      this.load =true;
    }, error => {
      console.log(error);
      this.load =true;
    });

  }

}
