import { Education } from "./education";
import { Experience } from "./experience";
import { Profile } from "./profile";
import { Project } from "./project";
import { Skill } from "./skill";

export interface Main {
  education: Education[],
  experiences: Experience[],
  profile: Profile[],
  projects: Project[],
  skills: Skill[]
}