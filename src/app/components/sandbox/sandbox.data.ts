export const FXLAYOUTCONFIG: IfxLayoutConfig[] = [
    {bird: 'falcon', color: '#009688', height: ''},
    {bird: 'swan', color: '#9c27b0', height: '110'},
    {bird: 'parrot', color: '#3949ab', height: '38'},
    {bird: 'flamingo', color: '#5ca6b0', height: '75'},
    {bird: 'owl', color: '#b08752', height: ''},
    {bird: 'sparrow', color: 'firebrick', height: '120'},
    {bird: 'duck', color: 'darkgray', height: '60'},
    {bird: 'seagull', color: 'lightsteelblue', height: '145'},
    {bird: 'kiwi', color: 'darkseagreen', height: '50'},
  ]

export const FXFLEX_CODECHUNK = `
  <shared-card 
      [title]="'fxLayout (Birdboxes)'"
      (showHtml)="toggleHtml($event)"
      [class.fxflex-card]="!isHtmlMode">
      <pre *ngIf="isHtmlMode; else mainView">{{code}}</pre>
      <ng-template #mainView>
      <fieldset class="app-fieldset">
        <legend>Horizontal align</legend>
          <mat-radio-group [(ngModel)]="horizAlign">
            <mat-radio-button *ngFor="let align of horizAlignArr"
            [value]="align">{{align}}</mat-radio-button>
          </mat-radio-group>
      </fieldset>
      <fieldset class="app-fieldset">
        <legend>Vertical align</legend>
          <mat-radio-group [(ngModel)]="verticalAlign">
            <mat-radio-button *ngFor="let align of verticalAlignArr" 
            [value]="align">{{align}}</mat-radio-button>
          </mat-radio-group>
      </fieldset>
      <div class="bird-boxes" fxLayout="row wrap" [fxLayoutAlign]="horizAlign + ' ' + verticalAlign">
        <div *ngFor="let obj of fxLayoutConfig; let i=index" class="box" [style.background-color]="obj.color"
          [style.height]="obj.height+'px'"><p>{{obj.bird}}</p></div>
      </div>
      </ng-template>
    </shared-card>`

export const ANIMATION_CODECHUNK = `
<fieldset class="app-fieldset">
<legend>Add stuff to arrange the park of your dream! (or nightmare)</legend>
<button *ngFor="let elem of (parkElements | keyvalue: originalOrder)" (click)="handleButton(elem.key)">
  {{elem.value}}
</button>
<button *ngIf="visibleItems.length > 0" [@appear] [@disappear] id="remove-last" (click)="removeLast()">
  <-- remove last</button>
    <button *ngIf="visibleItems.length > 2" [@appear] [@disappear] id="reset"
      (click)="visibleItems = []; visibleItemsWidth = 0; areTrees = false;">RESET</button>
    <button *ngIf="areTrees" [@appear] [@disappear] id="water" (click)="waterStart(); birdsaudio.play()">
      Water trees!</button>
</fieldset>
<div class="park-back">
<img [@sunflow]="sunflowState" src="../../../../assets/img/sun.svg" id="sun" />
<img *ngFor="let item of visibleItems" [src]="'../../../../assets/img/' + item + '.svg'"
  [class]="(item.includes('tree') || item == 'girl') ? 'larger' : 'smaller'" [@appear]
  [@grow]="(item.includes('tree')) ? scaleState : 'noScale'">
</div>
..........................
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

`
export  interface IisHtmlMode {
    fxflex: boolean,
    cssalign: boolean,
    animations: boolean
  }
  
export  interface IfxLayoutConfig {
    bird: string,
    color: string,
    height: string
  }
