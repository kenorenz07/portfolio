'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Palette, MessageSquare, Cloud, Check } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { services } from '@/data/portfolio-data';

const iconMap = {
  Code,
  Smartphone,
  Database,
  Palette,
  MessageSquare,
  Cloud,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Services I Offer" 
          subtitle="Comprehensive development solutions tailored to your needs"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={service.id}
              >
                <Card className="h-full">
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary-600 dark:text-primary-400" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                        <Check className="text-primary-500 flex-shrink-0 mt-0.5" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card glassmorphism className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and how I can help you achieve your goals. 
              I'm available for freelance projects and consulting opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
