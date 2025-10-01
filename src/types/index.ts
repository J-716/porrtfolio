export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'design' | 'branding';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  completedAt: string;
  client?: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface Stats {
  projectsCompleted: number;
  clientsServed: number;
  yearsExperience: number;
  satisfactionRate: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  readTime: number;
  slug: string;
}

