import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery1.jpeg', alt: 'Corporate Gala', span: 'col-span-1 row-span-2', imgClass: 'object-center' },
  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery2_ypq6pq.jpg', alt: 'Birthday Celebration', span: 'col-span-1 row-span-1', imgClass: 'object-center' },
  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery3_jtoerq.jpg', alt: 'Stage Decoration', span: 'col-span-1 row-span-1', imgClass: 'object-center' },
  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916411/hero_q5t4o5.jpg', alt: 'Wedding Reception', span: 'col-span-2 row-span-1', imgClass: 'object-[center_80%]' },
  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery4_cjdvy9.jpg', alt: 'Elegant Event', span: 'col-span-1 row-span-1', imgClass: 'object-center' },
  { src: '/images/gallery5.jpeg', alt: 'Luxury Setting', span: 'col-span-1 row-span-1', imgClass: 'object-center' },
  { src: 'https://res.cloudinary.com/deukglrjw/image/upload/v1780916410/gallery6_tge1bo.jpg', alt: 'Award for Best Manpower Solution', span: 'col-span-1 row-span-1', imgClass: 'object-center' },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-premium-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-4">Event Gallery</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-6">
            A Glimpse Into Our Masterpieces
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.imgClass || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-premium-white font-heading text-xl font-bold border border-premium-white px-6 py-2 rounded-full">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
