import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedStuffAndMaterialModule } from '../../../shared/shared.module';

import { AnimationsComponent } from './animations.component';

describe('AnimationsComponent', () => {
  let component: AnimationsComponent;
  let fixture: ComponentFixture<AnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStuffAndMaterialModule, BrowserAnimationsModule ],
      declarations: [ AnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsComponent);
    component = fixture.componentInstance;
    component.ngAfterViewInit = () => {}; //to avoid side effects
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('waterStart should change scaleState and areTress properties', () => {
    component.waterStart();
    fixture.detectChanges();
    expect(component.scaleState).toEqual("large");
    expect(component.areTrees).toEqual(false);
  });

  describe("handleButton", () => {
    it("should add item to visibleItems correctly", () => {
      component.visibleItemsWidth = 89;
      const value = "3 trees";
      component.handleButton(value);
      fixture.detectChanges();
      expect(component.visibleItems.pop()).toEqual(value);
    });

    it("should do nothing if visibleItemsWidth > 90", () => {
      component.visibleItemsWidth = 91;
      const items = component.visibleItems;
      component.handleButton("3 trees");
      fixture.detectChanges();
      expect(component.visibleItems).toEqual(items);
    });
  });

});
