import React from 'react';
import { Store, Share2, Send, Youtube, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Links Column */}
          <div className="footer-column">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Store className="w-5 h-5" />
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Column */}
          <div className="footer-column">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Share2 className="w-5 h-5" />
              Socials
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.tiktok.com/@myeastview?_t=ZM-8zMJQVY74nG&_r=1" 
                  className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                  Youtube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61577378475137y" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/no_visualizer?igsh=MTZyZDl5ZTJ4ZDZmdA==" 
                  className="flex items-center gap-2 text-gray-300 hover:text-pink-500 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Send className="w-5 h-5" />
              CONTACT
            </h3>
            <p className="text-gray-300">
              <a 
                href="mailto:example@gmail.com"
                className="hover:text-white transition-colors duration-200"
              >
                example@gmail.com
              </a>
            </p>
          </div>

          {/* Logo Column */}
          <div className="footer-column flex justify-center lg:justify-end">
            <div className="foot-logo">
              <img 
                src="./img/pic4.jpg.png" 
                alt="Company Logo" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-4" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;