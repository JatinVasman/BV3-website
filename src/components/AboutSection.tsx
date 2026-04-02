'use client';

import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';

export function AboutSection() {
  return (
    <section id="about" className="section section-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/about.webp"
              alt="About Business Volunteers"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <span className="text-gold font-dm font-semibold text-sm uppercase tracking-widest">
                About Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Who We Are
            </h2>

            <h3 className="text-2xl font-playfair font-bold mb-6 text-gradient">
              Fueling brand success through innovative strategy and creative excellence.
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>
                Business Volunteers is a full-service digital marketing agency dedicated to
                transforming how brands connect with their audiences. We blend data-driven insights
                with bold creative thinking to deliver campaigns that don't just look good — they
                perform. From social media strategy and performance marketing to branding, web
                development, and CRM automation, every solution we craft is designed to generate
                measurable results and lasting impact.
              </p>

              <p>
                Founded with the belief that exceptional marketing should be accessible to businesses
                of all sizes, we bring enterprise-level expertise to startups, local establishments,
                and scaling companies alike. Our approach is straightforward: deep research, precision
                targeting, compelling storytelling, and relentless optimization. We don't chase vanity
                metrics — we build revenue-generating machines for our clients, one campaign at a time.
              </p>
            </div>

            <button
              onClick={() => scrollToElement('contact')}
              className="btn-primary"
            >
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
