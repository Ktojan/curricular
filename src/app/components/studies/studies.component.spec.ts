import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';
import { StudiesComponent } from './studies.component';
import { SharedStuffAndMaterialModule } from '../../shared/shared.module';

describe('StudiesComponent', () => {
  let component: StudiesComponent;
  let mockDataService;
  let mockEducation = [
    {
      years: "2021",
      subject: "Angular Advanced",
      place: "Cbsystematics Development"
    },
    {
      years: "2020",
      subject: "Typesript advanced",
      place: "Hillel IT School"
    }
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStuffAndMaterialModule],
      declarations: [StudiesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(["getSection"]);
    mockDataService.url = DataService.DATA;
    component = new StudiesComponent(mockDataService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("while initialization ", () => {
    beforeEach(() => {
      mockDataService.getSection.and.returnValue(of(mockEducation));
      component.ngOnInit();
    });

    it("should get studies data", () => {
      expect(component.studies).toEqual(mockEducation);
    });

    it("should call data service getSection", () => {
      expect(mockDataService.getSection).toHaveBeenCalledWith('education');
    });

    it("should set 'loaded' to true", () => {
      expect(component.loaded).toBeTruthy()
    });
  });
});
