import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlApisComponent } from './html-apis.component';

describe('HtmlApisComponent', () => {
  let component: HtmlApisComponent;
  let fixture: ComponentFixture<HtmlApisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
