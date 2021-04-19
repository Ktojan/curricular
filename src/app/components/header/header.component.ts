import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigationLinks: {label: string, link: string, icon: string}[] = [
    {label: 'About', link: 'about', icon: "fa fa-diamond" },
    {label: 'Skills', link: 'skills', icon: "fa fa-thermometer-three-quarters" },
    {label: 'Education', link: 'education', icon: "fa fa-graduation-cap" },
    {label: 'Experience', link: 'experience', icon: "fa fa-check-square-o" },
    {label: 'Projects', link: 'projects', icon: "fa fa-cubes" },  
  ]
  constructor() { }

  ngOnInit() {}   

}
