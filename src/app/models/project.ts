import { SafeResourceUrl } from "@angular/platform-browser";

export interface Project {
  name: string,
  tech: string,
  img?: string,
  media?: string,
  embLink?: SafeResourceUrl,
  liveLink?: string,
  desc?: string,
  commercial: boolean;
}