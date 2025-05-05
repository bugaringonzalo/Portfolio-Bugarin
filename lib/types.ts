export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design';
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
  role?: string;
  date: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}