import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { SidebarComponent } from './sidebar.component';
import { EMPTY_PROFILE } from '../../shared/defaults';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let mockDataService;
  let mockProfile = EMPTY_PROFILE

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(["getSection"]);
    mockDataService.url = DataService.DATA;
    component = new SidebarComponent(mockDataService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("while initialization ", () => {
    beforeEach(() => {
      mockDataService.getSection.and.returnValue(of(mockProfile));
      component.ngOnInit();
    });

// this.dataService.getSection('profile').subscribe((data: IProfile) => this.profile = data);

    it("should get profile data", () => {
      expect(component.profile).toEqual(mockProfile);
    });

    it("should call data service getSection with profile param", () => {
      expect(mockDataService.getSection).toHaveBeenCalledWith('profile');
    });
  });
});
