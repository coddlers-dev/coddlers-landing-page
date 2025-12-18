export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;

export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#blog' },
      { label: 'Documentation', href: '#docs' },
      { label: 'Help Center', href: '#help' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { platform: 'twitter', href: 'https://twitter.com/coddlers', icon: 'Twitter' },
  { platform: 'github', href: 'https://github.com/coddlers', icon: 'Github' },
  { platform: 'linkedin', href: 'https://linkedin.com/company/coddlers', icon: 'Linkedin' },
] as const;

