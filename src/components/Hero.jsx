import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916411/hero_q5t4o5.jpg', pos: 'object-center sm:object-bottom md:object-[center_100%] lg:object-[center_70%]' },
  { src: '/images/gallery1.jpeg', pos: 'object-center' },

  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery4_cjdvy9.jpg', pos: 'object-center' },

  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery6_tge1bo.jpg', pos: 'object-center' },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-premium-black">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentImageIndex}
            src={heroImages[currentImageIndex].src}
            alt="Luxury Wedding Event" 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full object-cover ${heroImages[currentImageIndex].pos}`} 
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-bold text-premium-white mb-6"
        >
          Creating <span className="text-premium-gold">Unforgettable</span> Events
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-premium-cream mb-10 font-light"
        >
          Premium event planning, luxury decorations, and world-class catering services tailored for your special celebrations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a href="#contact" className="bg-premium-gold text-premium-white px-8 py-4 rounded-full text-lg font-medium hover:bg-yellow-600 transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.5)]">
            Book an Event
          </a>
          <a href="#gallery" className="bg-transparent border border-premium-white text-premium-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-premium-black transition-all">
            View Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
