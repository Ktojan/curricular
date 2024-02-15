import { async, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { DataService } from "../../services/data.service";
import { SkillColored, SkillsComponent } from "./skills.component";
import { SharedStuffAndMaterialModule } from "../../shared/shared.module";
import { DEFAULT_SKILL } from "../../shared/defaults";

describe("SkillsComponent", () => {
  let component: SkillsComponent;
  let mockDataService;
  let mockSkill = DEFAULT_SKILL;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedStuffAndMaterialModule],
      declarations: [SkillsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    mockDataService = jasmine.createSpyObj(["getSection"]);
    mockDataService.url = DataService.DATA;
    component = new SkillsComponent(mockDataService);
  });

  it("should create and set loaded to false", () => {
    expect(component).toBeTruthy();
    expect(component.loaded).toBeFalsy();
  });

  describe("while initialization ", () => {
    beforeEach(() => {
      mockDataService.getSection.and.returnValue(of([mockSkill]));
      component.ngOnInit();
    });

    it("should get studies data", () => {
      expect(component.skills).toEqual([mockSkill]);
    });

    it("should call data service getSection", () => {
      expect(mockDataService.getSection).toHaveBeenCalledWith("skills");
    });

    it("should set 'loaded' to true", () => {
      expect(component.loaded).toBeTruthy();
    });
  });

  describe("chooseColor method ", () => {
    it("should set green when value >80", () => {
      const green = {
        color: "green",
        class_progress: "bg-success",
      };
      const skill: SkillColored = { value: 81, name: "", classcolor: green };
      expect(component.chooseColor(skill)).toEqual(green);
    });

    it("should set blue when value 70..80", () => {
      const blue = {
        color: "blue",
        class_progress: "bg-info",
      };
      const skill: SkillColored = { value: 74, name: "", classcolor: blue };
      expect(component.chooseColor(skill)).toEqual(blue);
    });

    it("should set yellow when value 40...70", () => {
      const yellow = {
        color: "yellow",
        class_progress: "bg-warning",
      };
      const skill: SkillColored = { value: 69, name: "", classcolor: yellow };
      expect(component.chooseColor(skill)).toEqual(yellow);
    });

    it("should set red when value <40", () => {
      const red = {
        color: "red",
        class_progress: "bg-danger",
      };
      const skill: SkillColored = { value: 17, name: "", classcolor: red };
      expect(component.chooseColor(skill)).toEqual(red);
    });
  });
});
