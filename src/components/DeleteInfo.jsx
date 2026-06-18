import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const DeleteInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-premium-cream min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-400"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-4">Account Deletion & Data Privacy</h1>
          <p className="text-premium-gold mb-10 font-medium">Elegant caters Solutions</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Elegant caters Solutions gives you full control over your user account and data. You can delete your account at any time.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">1</span>
                In-App Deletion Process
              </h2>
              <ol className="list-decimal pl-12 space-y-3 font-medium text-premium-charcoal">
                <li>Open the Elegant caters app.</li>
                <li>Visit the Profile screen.</li>
                <li>Tap on Settings.</li>
                <li>Select "Delete My Account" and confirm.</li>
              </ol>
              <p className="pl-11 mt-4 text-gray-500 italic">
                Note: Your account will be immediately disabled and queued for deletion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">2</span>
                Web-Based Deletion (For Uninstalled Users)
              </h2>
              <div className="pl-11 space-y-4">
                <p>
                  If you have already uninstalled the app and want to delete your data, please contact our admin by email at <a href="mailto:elegantcateringmegt@gmail.com" className="text-premium-gold hover:underline">elegantcateringmegt@gmail.com</a>.
                </p>
                <p>
                  Use this email to request account deletion and include your registered mobile number.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">3</span>
                Data Deletion Policy
              </h2>
              <p className="pl-11">
                Once account deletion is requested, your personal profile data is purged within <strong className="text-premium-charcoal">48-72 hours</strong>. Transactional work records (attendance logs) are retained anonymized for <strong className="text-premium-charcoal">6 months</strong> for labor regulation compliance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">4</span>
                Processing Time
              </h2>
              <p className="pl-11">
                Deletion requests are processed within current Indian local business hours, typically within <strong className="text-premium-charcoal">48 hours</strong>.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-gray-400 text-sm font-medium">&copy; 2026 Elegant caters. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeleteInfo;
