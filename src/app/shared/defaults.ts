import { SkillColored } from "../components/skills/skills.component";
import { IProfile } from "../models/profile";

export const EMPTY_PROFILE: IProfile = {
    born_city: "",
    born_year: 0,
    current_city: "",
    future_city: '',
    img_profile: "",
    name: "",
    email: "",
    whatsapp: "",
    linkedinURL: "",
    githubURL: "",
    about: '',
    interests: '',
    languages: []
  };

export const DEFAULT_SKILL: SkillColored = {
  name: "Javascript, Typescript",
  value: 89,
  classcolor: {
    class_progress: "bg-success",
    color: "green",
  }
};
