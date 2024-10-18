import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProfile } from '../../models/profile';
import { DataService } from '../../services/data.service';
import { EMPTY_PROFILE } from '../../shared/defaults';
import {osmMap} from '../../shared/osm-map-plugin';

const lisbonCoords = [-9.1562, 38.74054];

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('mapchunk') mapchunkElem: ElementRef<HTMLElement>;

  public profile: IProfile = EMPTY_PROFILE;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.url = DataService.DATA;
    this.dataService.getSection('profile').subscribe((data: IProfile) => this.profile = data);
  }

  ngAfterViewInit() {
    const mapChunkHTL = osmMap(lisbonCoords[0], lisbonCoords[1], 11, 300, 250); // lng, lat, zoom, width, height
    this.mapchunkElem.nativeElement.innerHTML = mapChunkHTL;
  }

}
