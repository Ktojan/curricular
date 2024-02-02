import { Component, OnInit } from '@angular/core';
import { IProfile } from '../../models/profile';
import { DataService } from '../../services/data.service';
import { EMPTY_PROFILE } from '../../shared/defaults';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public profile: IProfile = EMPTY_PROFILE;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection('profile').subscribe((data: IProfile) => this.profile = data);
  }
}
