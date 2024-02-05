import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../models/profile';
import { DataService } from '../../services/data.service';
import { EMPTY_PROFILE } from '../../shared/defaults';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public profile: IProfile = EMPTY_PROFILE;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection('profile').subscribe((data: IProfile) => this.profile = data);
  }

}
