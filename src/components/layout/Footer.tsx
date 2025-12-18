import Link from 'next/link';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_CONFIG } from '@/constants';

const socialIcons = {
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
} as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-neutral-800 py-16" role="contentinfo">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="text-lg font-medium text-white tracking-tight"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-4 text-neutral-500 text-sm leading-relaxed max-w-xs">
              Building better software, together.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-500 hover:text-white transition-colors"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-white text-sm mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-500 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-800">
          <p className="text-neutral-600 text-sm text-center">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
