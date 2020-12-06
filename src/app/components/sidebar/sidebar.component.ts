import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public img_profile: string;
  public name: string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.responseType = DataService.JSON;
    this.dataService.getData().subscribe(data =>{
      this.img_profile = data["img_profile"];
      this.name = data["name"];
    });
  }

}
