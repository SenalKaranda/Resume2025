// --- Interfaces for each section ---

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  validUntil?: string;
  credentialId: string;
  link: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  metrics?: string[];
  date: string;
}

export interface MentoringItem {
  title: string;
  description: string;
  achievements: string[];
  date: string;
}

export interface VolunteerItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  impact: string[];
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
  url: string;
  languages: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

// --- Main ResumeData interface ---

export interface ResumeData {
  name: string;
  title: string;
  logo_src: string;
  location: string;
  email: string;
  website: string;
  github: string;
  linkedin: string;
  // Each string is a paragraph or bullet point
  summary: string[];
  availability: string[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: Certification[];
  achievements: Achievement[];
  mentoring: MentoringItem[];
  volunteering: VolunteerItem[];
  openSource: Repository[];
  projects: ProjectItem[];
}