import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-premium-black mb-4">Terms & Privacy Policy</h1>
          <p className="text-premium-gold mb-10 font-medium">Last Updated: April 3, 2026</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Elegant caters ("we," "us," or "our") operates the Elegant caters mobile application. This policy explains the data we collect and how we protect it.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">1</span>
                Information We Collect
              </h2>
              <ul className="list-disc pl-12 space-y-3">
                <li><strong className="text-premium-charcoal">Personal Information:</strong> Name, mobile number, and unique QR identification codes.</li>
                <li><strong className="text-premium-charcoal">Work & Attendance:</strong> Check-in/Check-out times, venue locations, and assigned event roles.</li>
                <li><strong className="text-premium-charcoal">Financial Data:</strong> Calculated earnings, travel allowances, and payment status.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">2</span>
                Permissions and Sensitive Data
              </h2>
              <div className="pl-11 space-y-4">
                <p>
                  <strong className="text-premium-charcoal">Camera Access (android.permission.CAMERA):</strong> Our app requires access to your device's camera for QR code scanning. This is used only to verify attendance at event venues and for identity verification via profile photos. We do not store or transmit any images without your explicit action.
                </p>
                <p>
                  <strong className="text-premium-charcoal">Location Data:</strong> We collect your precise location only during check-in and check-out. This is used to verify that you are at the designated work venue. We do not track your location in the background.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">3</span>
                How We Use Data
              </h2>
              <p className="pl-11">
                Data is used to verify work shifts, calculate accurate payments for staff, and manage event logistics for our clients. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">4</span>
                Data Storage and Security
              </h2>
              <p className="pl-11">
                Your information is stored securely in encrypted databases. Access is restricted to authorized administrative personnel only for operational needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">5</span>
                Your Rights
              </h2>
              <p className="pl-11">
                You may request to update your mobile number or delete your account anytime by contacting our administrative team.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-premium-black mt-10 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-premium-gold/10 text-premium-gold flex items-center justify-center mr-3 text-sm">6</span>
                Contact Us
              </h2>
              <p className="pl-11">
                If you have any questions, please reach out to the Elegant caters Administrative Team.
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

export default Terms;
