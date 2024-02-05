import { Education } from "./education";
import { Experience } from "./experience";
import { IProfile } from "./profile";
import { Project } from "./project";
import { Skill } from "./skill";

export interface Main {
  education: Education[],
  experiences: Experience[],
  profile: IProfile[],
  projects: Project[],
  skills: Skill[]
}
