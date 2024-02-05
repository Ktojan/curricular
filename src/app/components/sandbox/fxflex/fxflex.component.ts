import { FocusOrigin } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FXFLEX_CODECHUNK, FXLAYOUTCONFIG, IfxLayoutConfig } from '../sandbox.data';

@Component({
  selector: 'app-fxflex',
  templateUrl: './fxflex.component.html',
  styleUrls: ['./fxflex.component.css']
})
export class FxflexComponent {

  isHtmlMode = false;
  fxLayoutConfig: IfxLayoutConfig[] = FXLAYOUTCONFIG;
  code = FXFLEX_CODECHUNK;
  horizAlign: string = 'space-evenly';
  verticalAlign: string = 'center';
  horizAlignArr: string[] = ['none', 'center', 'space-between', 'space-evenly'];
  verticalAlignArr: string[] = ['stretch', 'center', 'start', 'end'];

  toggleHtml(curValue: boolean = false) {
    this.isHtmlMode = curValue;
  }

  //for Accessibility styling
  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

}
