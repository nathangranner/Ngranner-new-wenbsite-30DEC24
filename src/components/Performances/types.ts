export interface ExternalLink {
  title: string;
  url: string;
}

export interface Role {
  title: string;
  role: string;
  opera: string;
  company: string;
  year: string;
  description: string;
  reviews: string;
  externalLinks?: ExternalLink[];
  imageUrl: string;
  imageAlt: string;
}