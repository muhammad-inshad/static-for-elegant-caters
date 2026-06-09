import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '500+', label: 'Events Managed' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '10+', label: 'Years Experience' },
  { number: '50+', label: 'Awards Won' },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-premium-gold text-premium-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-heading font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-premium-cream">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
