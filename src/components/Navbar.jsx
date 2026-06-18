import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolidPage = window.location.pathname === '/terms' || window.location.pathname === '/delete-account';
  const navBackground = isScrolled || isSolidPage ? 'glassmorphism py-4' : 'bg-transparent py-6';
  const titleColor = isScrolled || isSolidPage ? 'text-premium-black' : 'text-premium-white';
  const linksColor = isScrolled || isSolidPage ? 'text-premium-charcoal' : 'text-premium-white';
  const toggleColor = isScrolled || isSolidPage ? 'text-premium-black' : 'text-premium-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <a href="/" className="text-2xl font-heading font-bold text-premium-gold hover:opacity-80 transition-opacity">
          Elegant  <span className={titleColor}>Caterers</span>
        </a>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 font-medium ${linksColor}`}>
          <a href="/#about" className="hover:text-premium-gold transition-colors">About Us</a>
          <a href="/#services" className="hover:text-premium-gold transition-colors">Services</a>
          <a href="/#gallery" className="hover:text-premium-gold transition-colors">Gallery</a>
          <a href="/#contact" className="hover:text-premium-gold transition-colors">Contact</a>
          
        </div>
        
        <div className="hidden md:block">
          <a href="/#contact" className="bg-premium-gold text-premium-white px-6 py-2 rounded-full font-medium hover:bg-yellow-600 transition-colors">
            Book an Event
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={toggleColor}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism absolute top-full left-0 w-full py-4 px-6 flex flex-col space-y-4 shadow-lg text-premium-charcoal font-medium">
          <a href="/#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="/#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
          <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="/#contact" className="bg-premium-gold text-white px-6 py-2 rounded-full text-center hover:bg-yellow-600 transition-colors">Book an Event</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
