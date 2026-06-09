import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    location: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Assuming the endpoint for contact is /contact based on standard conventions
      const response = await fetch('https://elegant-caters-backend-server.onrender.com/api/v1/enquires', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', phone: '', date: '', location: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-premium-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-premium-gold uppercase tracking-wider mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-6">
            Let's Plan Your Next Event
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="flex items-start">
              <div className="bg-premium-cream p-4 rounded-full mr-4 text-premium-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Our Location</h4>
                <p className="text-premium-charcoal">MANJERI</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-premium-cream p-4 rounded-full mr-4 text-premium-gold">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                <p className="text-premium-charcoal">9526141395</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-premium-cream p-4 rounded-full mr-4 text-premium-gold">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Address</h4>
                <a href="mailto:elegantcateringmegt@gmail.com" className="text-premium-charcoal hover:text-premium-gold transition-colors">
                  elegantcateringmegt@gmail.com
                </a>
              </div>
            </div>

            <a href="https://wa.me/9526141395" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full bg-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-600 transition-colors">
              <FaWhatsapp className="mr-2" size={24} />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={20} />
                  <span>Thank you! Your request has been successfully submitted.</span>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center">
                  <AlertCircle className="mr-2 flex-shrink-0" size={20} />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-premium-gold" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-premium-gold" 
                    placeholder="+91 9876543210" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-premium-gold" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-premium-gold" 
                    placeholder="City or Venue" 
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-premium-gold" 
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full bg-premium-black text-white py-4 rounded-lg font-bold transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800'}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
