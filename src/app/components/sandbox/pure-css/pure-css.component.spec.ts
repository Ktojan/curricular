import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureCssComponent } from './pure-css.component';

xdescribe('PureCssComponent', () => {
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
});
