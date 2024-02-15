import { FocusOrigin } from '@angular/cdk/a11y';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedStuffAndMaterialModule } from '../../../shared/shared.module';
import { FXFLEX_CODECHUNK } from '../sandbox.data';

import { FxflexComponent } from './fxflex.component';

describe('FxflexComponent', () => {
  let component: FxflexComponent;
  let fixture: ComponentFixture<FxflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStuffAndMaterialModule],
      declarations: [ FxflexComponent ],
      // schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Tests methods', () => {
  it('toggleHtml should change html mode to the opposite', () => {
    component.isHtmlMode = false;
    component.toggleHtml(true);
    expect(component.isHtmlMode).toEqual(true);
    component.toggleHtml(false);
    expect(component.isHtmlMode).toEqual(false);
  })

  it('check formatOrigin (blurred)', () => {
    let origin: FocusOrigin = null;    
    expect(component.formatOrigin(origin)).toEqual('blurred');
  })

  it('check formatOrigin (focused)', () => {
    let origin: FocusOrigin = "keyboard";    
    expect(component.formatOrigin(origin)).toEqual('keyboard focused');

    origin = "mouse";    
    expect(component.formatOrigin(origin)).toEqual('mouse focused');
  })
})

describe("Template elements", () => {
  it("pre element should contain code chunk", () => {
    const code = FXFLEX_CODECHUNK;
    component.isHtmlMode = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("pre").textContent).toContain(
      code
    );
  });

  it("horizAlignArr should contain all options", () => {
    const horizAlignArr = ["none", "center", "space-between", "space-evenly"];
    for (let option of horizAlignArr) {
      expect(
        fixture.nativeElement.querySelector("#horizAlign").textContent
      ).toContain(option);
    }
  });

  it("verticalAlign group should contain all options", () => {
    const verticalAlignArr = ['stretch', 'center', 'start', 'end'];
    for (let option of verticalAlignArr) {
      expect(
        fixture.nativeElement.querySelector("#verticalAlign").textContent
      ).toContain(option);
    }
  });
});
});
