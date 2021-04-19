import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public profile: Profile = {
    born_city: "",
    born_year: 0,
    current_city: "",
    img_profile: "",
    name: "",
    phone_number: ""
  };

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection('profile').subscribe((data: Profile) => this.profile = data);
  }

}
