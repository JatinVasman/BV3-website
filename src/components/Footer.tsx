'use client';

import Link from 'next/link';
import { Instagram, MessageCircle, Facebook, Linkedin, Youtube, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { socialLinks, contactInfo } from '@/data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="container-custom py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <img
              src="/logo.webp"
              alt="Business Volunteers"
              className="h-10 brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Creative solutions that move brands forward. Affordable excellence for growing
              businesses.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-playfair font-bold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              {['About', 'Services', 'Portfolio', 'CRM', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-playfair font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-gray-400">
                <Mail size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone size={18} className="text-gold shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Map Column */}
          <div>
            <h3 className="text-white font-playfair font-bold mb-4">Location</h3>
            <iframe
              src="https://www.google.com/maps?q=28.6273928,77.3654327&output=embed"
              width="100%"
              height="200"
              style={{ border: 0, borderRadius: '8px', pointerEvents: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Business Volunteers Location"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Business Volunteers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
