'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { crmCards, crmServices } from '@/data/content';

export function CRMSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="crm" className="section section-dark">
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
            Smart Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mt-4">
            CRM Solutions That <span className="text-gradient">Strengthen Customer Relationships</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Streamline engagement, automate communication, and gain actionable insights with our
            intelligent CRM solutions designed for modern businesses.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mt-6" />
        </motion.div>

        {/* CRM Pipeline - Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {crmCards.map((card, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-dm font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gold text-dark shadow-gold-glow'
                    : 'bg-gray-800/50 text-white hover:bg-gray-700/50'
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl overflow-hidden p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={crmCards[activeTab].image}
                alt={crmCards[activeTab].title}
                className="w-full rounded-xl"
              />
              <div>
                <h3 className="text-3xl font-playfair font-bold mb-4 text-gradient">
                  {crmCards[activeTab].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {crmCards[activeTab].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CRM Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {crmServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 hover:shadow-gold-glow transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-playfair font-bold mb-2 text-white">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-gold text-sm font-dm font-semibold mb-3">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
