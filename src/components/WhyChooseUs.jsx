import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
  { title: 'Premium Service', desc: 'Uncompromising quality in every aspect.' },
  { title: 'Experienced Team', desc: 'Professionals who know how to deliver perfection.' },
  { title: 'Customized Packages', desc: 'Tailored solutions to fit your specific needs.' },
  { title: 'On-Time Execution', desc: 'Flawless timing for a stress-free experience.' },
  { title: 'Affordable Luxury', desc: 'High-end experiences without the excessive price tag.' },
  { title: 'Wide Network', desc: 'Connections with top-tier vendors and venues.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-premium-black text-premium-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Elevating Events Beyond Expectations
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We don't just organize events; we orchestrate unforgettable experiences. Our commitment to excellence and passion for perfection sets us apart as the premier choice for luxury event management.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-premium-gold mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-lg mb-1">{reason.title}</h4>
                    <p className="text-gray-400 text-sm">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery2_ypq6pq.jpg" alt="Setup 1" className="rounded-lg object-cover h-64 w-full mt-8" />
              <img src="https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery3_jtoerq.jpg" alt="Setup 2" className="rounded-lg object-cover h-64 w-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
