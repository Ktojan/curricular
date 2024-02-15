import { async, TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ExperienceComponent } from './experience.component';
import { FormsModule } from '@angular/forms';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let mockDataService;
  let mockExperience = {
    years: '1999',
    company: 'Adobe',
    position: 'CTO'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ExperienceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(["getSection"]);
    mockDataService.url = DataService.DATA;
    component = new ExperienceComponent(mockDataService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("while initialization ", () => {
    beforeEach(() => {
      mockDataService.getSection.and.returnValue(of([mockExperience]));
      component.ngOnInit();
    });

    it("should get experience data", () => {
      expect(component.experiences).toEqual([mockExperience]);
    });

    it("should call data service getSection", () => {
      expect(mockDataService.getSection).toHaveBeenCalledWith('experiences');
    });

    it("should set 'loaded' to true", () => {
      expect(component.loaded).toBeTruthy()
    });
  });
});
