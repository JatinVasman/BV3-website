'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from '@/data/content';

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Social Media Management',
    message: '',
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Open WhatsApp with form data
    const whatsappText = encodeURIComponent(
      `Hi, I'm interested in your services.\n\n` +
        `*Name:* ${form.name}\n` +
        `*Email:* ${form.email}\n` +
        `*Service:* ${form.service}\n\n` +
        `*Message:*\n${form.message}`
    );
    window.open(`${socialLinks.whatsapp}?text=${whatsappText}`, '_blank');

    // Reset form
    setForm({ name: '', email: '', service: 'Social Media Management', message: '' });
    setMessage({ type: 'success', text: 'Opening WhatsApp to continue the conversation!' });
    
    // Clear message after 3 seconds
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <section id="contact" className="section section-dark">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-dm font-semibold text-sm uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Reach out to us today to discuss your project and see how we can help your business grow.
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-white font-dm font-semibold mb-3">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-white font-dm font-semibold mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-white font-dm font-semibold mb-3">
                Service You're Interested In
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full"
              >
                <option>Social Media Management</option>
                <option>Website Development</option>
                <option>Logo & Branding</option>
                <option>Graphic Design</option>
                <option>Video Editing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-dm font-semibold mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={5}
                required
                className="w-full"
              />
            </div>

            {message && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-4 rounded-lg text-sm font-dm ${
                  message.type === 'success'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {message.text}
              </motion.div>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Start WhatsApp Chat
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gold hover:text-gold-light transition-colors font-dm font-semibold"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gold hover:text-gold-light transition-colors font-dm font-semibold block mb-2"
                  >
                    {contactInfo.email}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email2}`}
                    className="text-gold hover:text-gold-light transition-colors font-dm font-semibold"
                  >
                    {contactInfo.email2}
                  </a>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Address</p>
                  <p className="text-white font-dm">
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-playfair font-bold text-white mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300 font-dm">
                <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-sm text-gray-400 mt-4">
                  Response time: Within 24 hours for weekday inquiries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
