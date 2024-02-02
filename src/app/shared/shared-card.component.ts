import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output,  } from '@angular/core';

@Component({
    selector: 'shared-card',
    templateUrl: "./shared-card.component.html",
    styleUrls: ['./shared-card.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class SharedCardComponent {
    @Input() title: string = '';
    @Input() subtitle?: string = '';
    @Input() hideHtmlToggler?: boolean = false;
    @Output() showHtml? = new EventEmitter();

    htmlShow: boolean = false;

    // ngOnChanges(cdref: ChangeDetectorRef) {
    //   cdref.detectChanges();
    // }  

    toggleView() {
      this.htmlShow = !this.htmlShow;
      this.showHtml.emit(this.htmlShow);
    }
}
