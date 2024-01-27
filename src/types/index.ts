export type Project = {
  title: string;
  startPeriod: string;
  endPeriod: string;
  descriptions: string[];
  type: string;
  image: string;
  links: string[];
};

export type Artwork = {
  title: string;
  dateCreated: string;
  releaseDate: string;
  tracksNumber: number;
  spotify: string;
  appleMusic: string;
  soundCloud: string;
  tracks: { title: string; time: string }[];
};

export type WorkExperience = {
  title: string;
  companyName: string;
  location: string;
  start: string;
  end: string;
  startYear: String;
  endYear: string;
  logo: string;
  image: string;
  descriptions: string[];
};

export type Education = {
  title: string;
  degree: string;
  startYear: string;
  endYear: string;
  logo: string;
  image: string;
  descriptions: string[];
  courses: string[];
};
