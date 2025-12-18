import type { LucideIcon } from 'lucide-react';

// Navigation Types
export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface FooterLinkGroup {
  readonly title: string;
  readonly links: readonly NavLink[];
}

export interface SocialLink {
  readonly platform: string;
  readonly href: string;
  readonly icon: string;
}

// Content Types
export interface Feature {
  readonly icon: keyof typeof import('lucide-react');
  readonly title: string;
  readonly description: string;
}

export interface HeroContent {
  readonly companyName: string;
  readonly headline: string;
  readonly headlineAccent: string;
  readonly subheadline: string;
  readonly primaryCta: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly ogImage: string;
}

// Component Props Types
export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

