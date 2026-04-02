import type { Metadata } from 'next';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'FAQ | Business Volunteers',
  description: 'Frequently asked questions about our services and how we can help your business.',
};

const faqItems = [
  {
    id: 'faq-1',
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of digital marketing services including social media management, website development, graphic design, video editing, CRM setup, SEO, and brand strategy. Whether you need full-service support or specific services, we can tailor our offerings to your needs.',
  },
  {
    id: 'faq-2',
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary depending on the scope and complexity. A simple logo design might take 2-3 weeks, while a complete website redesign could take 6-8 weeks. During our initial consultation, we\'ll provide you with a detailed timeline and milestones.',
  },
  {
    id: 'faq-3',
    question: 'How much does your work cost?',
    answer:
      'We offer flexible pricing tailored to your budget and project scope. Rather than fixed rates, we assess your specific needs and provide a customized quote. Our goal is to deliver premium quality at affordable prices, especially for startups and growing businesses.',
  },
  {
    id: 'faq-4',
    question: 'Do you work with startups?',
    answer:
      'Absolutely! We specialize in working with startups and growing businesses. Our affordable, premium-quality services are designed to help businesses of all sizes achieve their marketing goals. Many of our satisfied clients are startups and small businesses.',
  },
  {
    id: 'faq-5',
    question: 'Can I see examples of your work?',
    answer:
      'Yes! You can view our portfolio on the Projects section of our website, which showcases websites we\'ve developed. You can also see our social media work in our Social Media Portfolio section with examples of designs and campaigns we\'ve created.',
  },
  {
    id: 'faq-6',
    question: 'How do you measure campaign success?',
    answer:
      'We track everything. For social media, we monitor engagement, reach, conversions, and ROI. For websites, we analyze traffic, bounce rates, and conversion metrics. For CRM campaigns, we track open rates, click rates, and customer retention. Regular reports are provided so you can see the impact.',
  },
  {
    id: 'faq-7',
    question: 'What is your revision policy?',
    answer:
      'We include unlimited revisions for most projects until you\'re completely satisfied. We believe in delivering quality work that meets your expectations. We\'ll work with you until we get it right.',
  },
  {
    id: 'faq-8',
    question: 'Do you offer ongoing support?',
    answer:
      'Yes! We offer ongoing support packages for website maintenance, social media management, CRM optimization, and campaign monitoring. Many of our clients maintain long-term relationships with us for continuous marketing support.',
  },
  {
    id: 'faq-9',
    question: 'How do I get started?',
    answer:
      'Simply fill out our contact form or reach out via WhatsApp, email, or phone. We\'ll schedule a consultation to understand your needs, goals, and budget. Then we\'ll propose a customized solution and timeline for your project.',
  },
  {
    id: 'faq-10',
    question: 'What makes you different from other agencies?',
    answer:
      'We combine enterprise-level expertise with affordable pricing. We\'re passionate about our work, treat every project as if it\'s our own, and focus on delivering real results — not just vanity metrics. We\'re reliable, responsive, and truly invested in your success.',
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-dark pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help
            your business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="glass rounded-lg px-6">
                <AccordionTrigger className="text-lg font-playfair font-bold text-white hover:text-gold transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-20 glass rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-playfair font-bold mb-4">
            Can't find your answer?
          </h2>
          <p className="text-gray-400 mb-6">
            Get in touch with us directly. We're here to help answer any questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="btn-primary">
              Contact Us
            </a>
            <a
              href="https://wa.me/918586989832"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
