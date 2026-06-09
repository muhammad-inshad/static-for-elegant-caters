import React from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 'AQMiS8stkxj1vuY7BPaeY7wBkq1FBfoaYozKgGz2TaKsYj-kWsRu1rApFlJMLYPee4Z1vtS0zxknMTaoVHLDTo0F0Qr3J0FN_qg6y9t',
    label: 'Our Team',
  },
  {
    id: 'instagram_hospitality_wedding_reels_trending_f4h2jo',
    label: 'Events',
  },
  {
    id: 'instagram_reels_trending_viral_wedding_lfyumq',
    label: 'Catering',
  },
];

const VideoCard = ({ video, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -10, scale: 1.03, zIndex: 10 }}
    className="relative flex-shrink-0"
    style={{ width: '200px' }}
  >
    <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
      <iframe
        src={`https://player.cloudinary.com/embed/?cloud_name=deukglrjw&public_id=${video.id}&autoplay=true&loop=true&muted=true&controls=false`}
        title={video.label}
        style={{ width: '200px', height: '355px', display: 'block' }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
    <div className="absolute bottom-4 left-0 right-0 text-center">
      <span className="bg-premium-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
        {video.label}
      </span>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 bg-premium-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* ── Video Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative flex justify-center">
              {/* Scrollable card row */}
              <div
                className="flex gap-4 overflow-x-auto pb-6 px-2"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {videos.map((video, index) => (
                  <div key={index} style={{ scrollSnapAlign: 'start' }}>
                    <VideoCard video={video} index={index} />
                  </div>
                ))}
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 -right-4 bg-premium-gold text-white p-6 rounded-lg shadow-xl hidden md:flex flex-col items-center z-20">
                <p className="text-4xl font-heading font-bold leading-none">10+</p>
                <p className="text-sm font-medium mt-1 text-center">Years of<br/>Experience</p>
              </div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-6">
              Crafting Your Perfect Moments With Elegance
            </h3>
            <p className="text-premium-charcoal text-lg mb-6 leading-relaxed">
              At Elegant Caterers, we believe that every celebration should be a masterpiece. For over a decade,
              our professional team has been dedicated to transforming ordinary spaces into extraordinary experiences.
            </p>
            <p className="text-premium-charcoal text-lg mb-8 leading-relaxed">
              From intimate gatherings to grand galas, our attention to detail, premium service, and personalized
              approach ensure that your event is nothing short of spectacular.
            </p>

            <ul className="space-y-4 mb-8">
              {['Dedicated Event Managers', 'Premium Culinary Experts', 'Customized Decoration Plans'].map((item, index) => (
                <li key={index} className="flex items-center text-premium-black font-medium">
                  <span className="w-2 h-2 bg-premium-gold rounded-full mr-4"></span>
                  {item}
                </li>
              ))}
            </ul>

            <a  
              href="#services"
              className="inline-block border-2 border-premium-gold text-premium-gold px-8 py-3 rounded-full font-medium hover:bg-premium-gold hover:text-white transition-colors"
            >
              Discover Our Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;