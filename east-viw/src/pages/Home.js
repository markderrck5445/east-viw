import React from 'react'
import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import pic4 from './img/pic4.jpg';
import pic5 from './img/pic5.jpg';
import pic6 from './img/pic6.jpg';
import { Store, Share2, Youtube, Facebook, Instagram, Send } from 'lucide-react';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="home-container">
          <h1>Welcome to East View<span>Trainig Institute</span></h1>
          <p>Enrollment at East View is designed to be a seamless and supportive experience for every prospective student. We welcome individuals from diverse backgrounds who are eager to pursue excellence and personal growth.
          </p>
      </div>
      <div className="hero-section">
          
      </div>

        <div className="home-content">
          <div className="home-section">
            <h2>About Us</h2>
            <p>
              East View is dedicated to providing a transformative educational experience that empowers students to excel academically and personally. Our commitment to excellence, integrity, and community shapes everything we do.
              </p>
          </div>
        </div>
        
        <div className="home-section-hero">
          <div className="hero-image">
            <img src={pic6} alt="Hero" />
            </div>
          <div className="hero-text">
            <h2>Become a great leader in just a few weeks</h2>
            <p>
              Join our culinary program and learn from experienced Lectures. Our hands-on approach ensures you gain practical skills and knowledge to excel in the culinary arts.
          </p>
          </div>
        </div>

 {/* courses section */}
          <div className="courses-section">
            <h1>Certificate/Diploma courses</h1>
           </div>
        <div className="courses-list">
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Sales and Marketing</h3>
              <p>Sales and Marketing is a dynamic course designed to provide students with a solid understanding of the principles and strategies used to promote and sell products or services.</p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Information Science</h3>
              <p>Information Science is a versatile course that focuses on the collection, organization, management, and dissemination of information.</p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Banking and Finance</h3>
              <p>Banking and Finance is a comprehensive course that introduces students to the principles and practices of the financial sector.</p>
              </div>
          </div>

        </div>

          <div className="courses-section">
            <h1>Short course</h1>
           </div>
         <div className="courses-list">
          <div className="course-item">
             <img src={pic2} alt="Hero" />
             <div className="course-details">
              <h3>Quick Books</h3>
              <p>The QuickBooks course offers a hands-on learning experience, guiding students through real-world accounting scenarios using the software. </p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic4} alt="Hero" />
             <div className="course-details">
              <h3>Office Management</h3>
              <p>Office Management is a comprehensive course that equips students with the essential skills needed to efficiently run and organize office operations. </p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic5} alt="Hero" />
             <div className="course-details">
              <h3>Book Keeping</h3>
              <p>Book Keeping is a foundational course that teaches students how to systematically record, organize, and manage financial transactions for businesses or organizations. </p>
              </div>
          </div>

        </div>

      {/* entry section */}

      <div className="entry-section">
        <div className="entry-text">
          <h2>Entry Qualifications</h2>
          <p>Certificate Artisan : D- or KCPE</p>
          <p>Certificate : D or Artisan</p>
          <p>Certificate :C- or Certificate</p>
          <p>Higher Diploma/Advance :Dip or Degree</p>
        </div>
      </div>

{/* registration section */}
      <div className="registration-section">
        <div className="registration-text">
        <h2>Registration Requirements</h2>
            <p>Copy of your National ID</p>
            <p>Coloured passports photos</p>
            <p>Copy of Educational Certificate</p>
            <p>Copy of Birth Certificate</p>
         </div>
      </div>
      
 {/* location section */}
    <div className="location-section">
      <div className="location-text">
        <h2>Our Location</h2>
        <p>
          We are located at the heart of Nairobi, along Mfangano street Mitihani House second Floor, opposite Equity Bank. Our central location makes it convenient for students to access our facilities and resources.
        </p>
      </div>
    </div>


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
                  href="#" 
                  className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                  Youtube
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-500 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="#" 
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
    </>
  )
}

export default Home;