import { Component } from "@angular/core";

@Component({
  selector: "app-pure-css",
  templateUrl: "./pure-css.component.html",
  styleUrls: ["./pure-css.component.css"],
})
export class PureCssComponent {
  constructor() {}

  arrayWithDuplicates = [-5, 3, 0, 16, 3, -5, "cukf", true, -5, true];
  arrayWithoutDuplicates: any[];
  setWithoutDuplicates: Set<any>;
  isHtmlMode = false;
  code = "some future code"; //todo

  toggleHtml(curValue: boolean = false) {
    this.isHtmlMode = curValue;
  }

  ngOnInit() {
  }

  cleanArrayFromDuplicates(initialArray: any[]): any[] {
    return Array.from(new Set(initialArray));
  }

  cleanFromDupl() {
    this.arrayWithoutDuplicates = this.cleanArrayFromDuplicates(this.arrayWithDuplicates)
  }
}
