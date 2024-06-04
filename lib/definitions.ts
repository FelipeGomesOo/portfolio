export interface Client {
  name: string;
  site?: string;
  sector: string;
  location?: string;
}

export interface Info {
  tagline: string;
  shortDescription: string;
  description: string;
  services: string[];
  tools: string[];
  live?: string;
  githubRepo?: string;
  direction?: Direction;
}

export interface Thumbs {
  src: string;
  alt?: string;
  size: number;
  w?: string;
  h?: string;
}
export interface Direction {
  name: string;
  company: string;
  url: string;
}

export interface Video {
  width: number;
  height: number;
  src: string;
  size: number;
}

export interface Section {
  title?: string;
  thumbs?: Thumbs[];
  subtitle?: string;
  video?: Video;
  videos?: Video[];
  type?: number;
  html?: any;
}

export interface Project {
  name: string;
  visible: boolean;
  cathegory: string;
  client: Client;
  info: Info;
  sections: Section[];
}
