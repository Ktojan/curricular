import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxflexComponent } from './fxflex.component';

describe('FxflexComponent', () => {
  let component: FxflexComponent;
  let fixture: ComponentFixture<FxflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
