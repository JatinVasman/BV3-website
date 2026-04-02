'use client';

import Link from 'next/link';
import { Instagram, MessageCircle } from 'lucide-react';
import { socialLinks } from '@/data/content';

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>

      {/* Instagram Button */}
      <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
        }}
        title="Follow on Instagram"
      >
        <Instagram size={28} className="text-white" />
      </a>
    </>
  );
}
