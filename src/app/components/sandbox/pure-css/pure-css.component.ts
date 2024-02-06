import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-css',
  templateUrl: './pure-css.component.html',
  styleUrls: ['./pure-css.component.css']
})
export class PureCssComponent {

  constructor() { }

  isHtmlMode = false;
  code = 'some future code'; //todo

  toggleHtml(curValue: boolean = false) {
    this.isHtmlMode = curValue;
  }

}
