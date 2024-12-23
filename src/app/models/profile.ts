export interface IProfile {
  img_profile: string,
  name: string,
  born_year: number, 
  born_city: string,
  current_city: string,
  future_city?: string,
  email: string,
  whatsapp: string,
  linkedinURL: string,
  githubURL: string,
  about: string,
  interests: string,
  languages: {lang: string, level: string, label?: any}[]
}
