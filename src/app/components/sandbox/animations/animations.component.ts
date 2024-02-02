import { Component } from '@angular/core';
import { 
  trigger, transition, state, animate, style, keyframes,
} from '@angular/animations';
import { ANIMATION_CODECHUNK } from '../sandbox.data';
import { KeyValue } from '@angular/common';

@Component({
  selector: "app-animations",
  templateUrl: "./animations.component.html",
  styleUrls: ["./animations.component.css"],
  animations: [
    trigger("appear", [
      transition("void => *", [style({ opacity: "0" }), animate("2.65s")]),
    ]),
    trigger("disappear", [
      transition("* => void", [style({ opacity: "1" }), animate("2s")]),
    ]),
    trigger("grow", [
      state("noScale", style({ transform: "scale(1)" })),
      state("large", style({ transform: "scale(1.3)" })),
      transition("noScale => large", animate('3.5s 1.5s')),
      transition("large => noScale", animate('5.5s')),
    ]),
    trigger('sunflow', [
      state('start', style({ top: '50%', left: '5%'})),
      state('end', style({ display: 'none'})),
      transition('start => end', animate('47s', keyframes([
        style({ top: '20%', left: '25%', offset: 0.2, transform: "scale(1.2)"}),
        style({ top: '5%', left: '50%', offset: 0.5, transform: "scale(1.45)"}),
        style({ top: '20%', left: '75%', offset: 0.8, transform: "scale(1.2)"}),
        style({ top: '45%', left: '90%', offset: 0.95}),
       ])))
    ])
  ],
})

export class AnimationsComponent {
  isHtmlMode = false;
  scaleState: "large" | "noScale" = "noScale";
  visibleItems: string[] = [];
  visibleItemsWidth: number = 0;
  parkElements = {
    trees2: "2 trees",
    trees3: "3 trees",
    bench: "a bench",
    wolf: "a wolf",
    girl: "bikini blonde! "
  };
  areTrees = false;
  sunflowState = 'start';
  code: string = ANIMATION_CODECHUNK;
  sunInterval: any;

  ngAfterViewInit() {
    this.sunflowState = 'end';
    this.sunInterval = setInterval(() => {
      this.sunflowState = 'start';
      setTimeout(() => this.sunflowState = 'end', 500)
    }, 50000 )
  }

  toggleHtml(curValue: boolean = false) {
    this.isHtmlMode = curValue;
  }

  waterStart() {
    this.scaleState = "large";
    this.areTrees = false;
    setTimeout(() => {
      this.areTrees = true;
      this.scaleState = "noScale"
    }, 11000);
  }

  handleButton(value: string) {
    if (this.visibleItemsWidth > 90) return;
    this.visibleItems.push(value);
    this.visibleItemsWidth += value.includes('tree') ? 8 : 4;
    this.recheckTrees();
  }

  removeLast() {
      const value: string = this.visibleItems.pop();
      this.visibleItemsWidth -= value.includes('tree') ? 8 : 4;
      this.recheckTrees();
  }  

  recheckTrees() {
    this.areTrees = this.visibleItems.includes('trees2') || this.visibleItems.includes('trees3')
  }

  originalOrder (a: KeyValue<string,string>, b: KeyValue<string,string>): number {
    return 0;
  }

  ngOnDestroy() {
    clearInterval(this.sunInterval);
  }
}
