import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DataService } from '../../services/data.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let mockDataService;
  let mockProfile = {
    img_profile: "./assets/img/profile.jpg",
    name: "Andrey Karpovich",
    born_year: 1986,
    born_city: "Odessa",
    current_city: "Lisbon",
    email: "karpovich.andrey@gmail.com",
    whatsapp: "+380980756478",
    linkedinURL: "https://www.linkedin.com/in/andrey-karpovich-345701131/",
    githubURL: "https://github.com/Ktojan/",
    about: "I'm a Frontend  Engineer ",
    interests: "Woodworking, guitar, singing, chess, drone-filming",
    languages: [],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(["getSection"]);
    mockDataService.url = DataService.DATA;
    component = new HomeComponent(mockDataService);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("while initialization ", () => {
    beforeEach(() => {
      mockDataService.getSection.and.returnValue(of(mockProfile));
      component.ngOnInit();
    });

    it("should get profile data", () => {
      expect(component.profile).toEqual(mockProfile);
    });

    it("should call data service getSection", () => {
      expect(mockDataService.getSection).toHaveBeenCalledWith('profile');
    });

  });
});
