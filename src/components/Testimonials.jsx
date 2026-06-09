import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Muhammad Inshad', role: 'Bride', text: 'Elegant Caters made our wedding day absolutely magical. The attention to detail and the quality of food were beyond our expectations.', rating: 5 },
  { name: 'Rashik OR', role: 'Corporate Director', text: 'Professional, punctual, and premium. They handled our annual gala for 500 guests flawlessly. Highly recommended for corporate events.', rating: 5 },
  { name: 'Safiya', role: 'Birthday Client', text: 'The decorations for my 30th birthday were stunning! They captured exactly what I wanted and added their own touch of luxury.', rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-premium-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-6">
            What Our Clients Say
          </h3>
        </div>

        <div className="overflow-hidden w-full relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-6 w-max animate-continuous-scroll md:animate-none md:grid md:grid-cols-3 md:w-auto md:gap-8">
            {[...testimonials, ...testimonials].map((test, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg relative w-[280px] sm:w-[320px] flex-shrink-0 md:w-auto ${index >= testimonials.length ? 'md:hidden' : ''}`}
              >
                <div className="flex text-premium-gold mb-4">
                  {[...Array(test.rating)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-premium-charcoal text-lg italic mb-6">"{test.text}"</p>
                <div>
                  <h4 className="font-bold text-premium-black">{test.name}</h4>
                  <p className="text-sm text-gray-500">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
