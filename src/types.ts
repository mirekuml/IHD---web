export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  imageUrl: string;
}

export interface PageContent {
  metaTitle: string;
  badgeText: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageUrl: string;
  introTitle: string;
  introParagraph1: string;
  introParagraph2: string;
  aboutImageUrl: string;
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceItem[];
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: BenefitItem[];
  stats: StatItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  footerText: string;
  contactEmail: string;
  contactAddress: string;
  blogs: BlogItem[];
}
