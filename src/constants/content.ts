export const HERO_CONTENT = {
  companyName: 'Coddlers',
  headline: "Let's build something",
  headlineAccent: 'great together',
  subheadline:
    'We transform your ideas into elegant, scalable solutions. Partner with us to ship software you can be proud of.',
  primaryCta: 'Contact Us',
} as const;

export const SERVICES = [
  {
    icon: 'Code2',
    title: 'Custom Software Development',
    description:
      'From concept to deployment, we build tailored solutions that solve your unique business challenges.',
  },
  {
    icon: 'Search',
    title: 'Code Quality & Reviews',
    description:
      'Expert code reviews and quality assurance to ensure your codebase is maintainable and scalable.',
  },
  {
    icon: 'Users',
    title: 'Team Augmentation',
    description:
      'Extend your team with skilled developers who integrate seamlessly into your workflow.',
  },
  {
    icon: 'Lightbulb',
    title: 'Technical Consulting',
    description:
      'Strategic guidance on architecture, technology choices, and best practices for your projects.',
  },
] as const;

export const ABOUT_CONTENT = {
  headline: 'Why Choose Coddlers?',
  description:
    "We're not just developers — we're your partners in building exceptional software. With a focus on clean code, modern practices, and genuine collaboration, we help teams deliver products they're proud of.",
  stats: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '10+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ],
} as const;

export const CTA_CONTENT = {
  headline: "Ready to Build Something Great?",
  description:
    "Let's discuss how we can help bring your vision to life. Schedule a free consultation with our team.",
  buttonText: "Let's Talk",
} as const;
