'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';

export function FAQCTASection() {
  return (
    <section className="section section-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <HelpCircle className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Find answers to common questions about our services, processes, and how we can help
            your business grow.
          </p>
          <Link href="/faq" className="btn-primary">
            View FAQs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
