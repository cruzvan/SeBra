
export interface ResponsiveImage {
  src: string;
  alt: string;
}

export interface AnimatedMedia {
  src: string;
  alt: string;
}

export interface Service {
  title: string;
  briefDescription: string;
  detailedDescription: string;
  cardAsset: { type: 'image', data: ResponsiveImage } | { type: 'animation', data: AnimatedMedia };
  mainImage: ResponsiveImage;
  detailImage?: ResponsiveImage;
  tags?: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: ResponsiveImage;
  slug: string;
  content: string; // HTML string for rich text content
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: string; // Main category
  tags: string[]; // Tags for filtering
  image: ResponsiveImage;
  content: string; // HTML details
}

export interface SubscriptionFeature {
  text: string;
  isHighlighted?: boolean;
}

export interface SubscriptionPlan {
  name: string;
  price: string;
  color: string; // Tailwind color class prefix (e.g., 'cyan', 'purple', 'orange')
  features: SubscriptionFeature[];
}