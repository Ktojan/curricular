import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCssComponent } from './pure-css.component';

describe('PureCssComponent', () => {
  let component: PureCssComponent;
  let fixture: ComponentFixture<PureCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
