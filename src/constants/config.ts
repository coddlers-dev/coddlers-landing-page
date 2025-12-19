export const SITE_CONFIG = {
  name: 'Coddlers',
  description: 'Ajudamos empresas a construir softwares melhores com confiança.',
  url: 'https://coddlers.com',
  ogImage: '/og-image.png',
} as const;

export const CONTACT_INFO = {
  email: 'contato@coddlers.com',
} as const;

export const ANIMATION_CONFIG = {
  introDelay: 2500,
  staggerDelay: 0.1,
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
  },
  spring: {
    snappy: { type: 'spring', stiffness: 400, damping: 30 },
    smooth: { type: 'spring', stiffness: 200, damping: 25 },
    bouncy: { type: 'spring', stiffness: 300, damping: 20 },
  },
} as const;

