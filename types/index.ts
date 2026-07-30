export interface HeroSlideItem {
  img: string;
  title: string;
  icon: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  problemSolved: string;
  badge: string;
}

export interface TestimonialItem {
  stars: number;
  quote: string;
  authorName: string;
  authorRole: string;
  avatarInitials: string;
}

export interface DeliverableTab {
  id: string;
  navLabel: string;
  title: string;
  description: string;
  features: string[];
  tag: string;
  img: string;
}
