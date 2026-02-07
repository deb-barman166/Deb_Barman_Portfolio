export enum SkillLevel {
  Beginner = 'Beginner',
  Advance = 'Advance',
  Expert = 'Expert',
  Legend = 'Legend'
}

export interface SkillItem {
  name: string;
  level: SkillLevel;
  subSkills?: SkillItem[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description?: string;
  keyHighlights?: string[];
  skills: SkillItem[];
}

export interface ChartDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  period: string;
  highlights: string[];
  technologies: string[];
  impact: string;
}