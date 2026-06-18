import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-premium-black text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="block text-3xl font-heading font-bold text-premium-gold mb-6 hover:opacity-80 transition-opacity">
              Elegant  <span className="text-white">Caterers</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Crafting extraordinary events and unforgettable memories with premium planning and catering services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-premium-gold transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/elegant_catering_management/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-premium-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-premium-gold transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-premium-gold transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/#about" className="text-gray-400 hover:text-premium-gold transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-premium-gold transition-colors">Services</a></li>
              <li><a href="/#gallery" className="text-gray-400 hover:text-premium-gold transition-colors">Gallery</a></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-premium-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Catering Services</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Elegant Caters. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/terms" className="hover:text-premium-gold transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-premium-gold transition-colors">Terms of Service</a>
            <a href="/delete-account" className="hover:text-premium-gold transition-colors">Delete Account</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
