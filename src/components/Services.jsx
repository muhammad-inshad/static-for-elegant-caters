import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Briefcase, Cake, Heart, Utensils, Sparkles } from 'lucide-react';

const servicesList = [
  { icon: Heart, title: 'Wedding Planning', desc: 'Comprehensive wedding management for your perfect day.' },
  { icon: Briefcase, title: 'Corporate Events', desc: 'Professional setups for conferences, galas, and meetings.' },
  { icon: Cake, title: 'Birthday Celebrations', desc: 'Themed parties and elegant setups for all ages.' },
  { icon: PartyPopper, title: 'Engagement Ceremonies', desc: 'Intimate and luxurious arrangements for your special moments.' },
  { icon: Utensils, title: 'Catering Services', desc: 'World-class culinary experiences with customized menus.' },
  { icon: Sparkles, title: 'Stage & Venue Decor', desc: 'Breathtaking floral and lighting designs.' },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-6">
            Everything You Need For A Perfect Event
          </h3>
          <p className="text-premium-charcoal text-lg">
            We offer a comprehensive suite of premium event management services to bring your vision to life.
          </p>
        </div>

        <div className="overflow-hidden w-full relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 w-max animate-continuous-scroll md:animate-none md:grid md:grid-cols-2 lg:grid-cols-3 md:w-auto md:gap-8">
            {[...servicesList, ...servicesList].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group w-[280px] sm:w-[320px] flex-shrink-0 md:w-auto ${index >= servicesList.length ? 'md:hidden' : ''}`}
              >
                <div className="w-16 h-16 bg-premium-cream rounded-full flex items-center justify-center mb-6 group-hover:bg-premium-gold transition-colors duration-300">
                  <service.icon className="text-premium-gold group-hover:text-premium-white transition-colors duration-300" size={32} />
                </div>
                <h4 className="text-2xl font-heading font-bold text-premium-black mb-4">{service.title}</h4>
                <p className="text-premium-charcoal">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
