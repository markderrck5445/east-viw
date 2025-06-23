import React from 'react'
import pic7 from './img/pic7.jpg';
import pic6 from './img/pic6.jpg';
import { Store, Share2, Send, Youtube, Facebook, Instagram } from 'lucide-react';
import footer from '../components/Footer';

function About() {
  return (
    <div>

      <div className="about-header">
           <h1>About East View</h1>
        </div>
        
      <div className="about-text">
        <div className="hero-img">
          <img src={pic7} alt="Hero" />
          <div className="hero-txt">
            <h2>Welcome to EastView</h2>
            <p>
              East View is a leading educational institution dedicated to fostering a culture of 
              learning, innovation, and community engagement. Our commitment to excellence and 
              inclusivity shapes the educational journey of every student who walks through our doors.
            </p>
          </div>
        </div>
      </div>


       <div className="about-container">
        
       
        <div className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              At East View, we are committed to providing exceptional educational experiences 
              that foster intellectual growth, critical thinking, and personal development. 
              Our mission is to empower students to become innovative leaders and responsible 
              global citizens.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Our Values</h2>
            <p>
              We believe in excellence, integrity, diversity, and community. These core values 
              guide everything we do, from our academic programs to our campus culture. We 
              strive to create an inclusive environment where every student can thrive and 
              reach their full potential.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Academic Excellence</h2>
            <p>
              Our rigorous academic programs are designed to challenge and inspire students 
              across all disciplines. With state-of-the-art facilities, renowned faculty, 
              and innovative teaching methods, we provide the tools and support necessary 
              for academic success.
            </p>
          </div>
          
          <div className="about-section">
            <h2>Campus Life</h2>
            <p>
              Beyond academics, East View offers a vibrant campus community with numerous 
              opportunities for personal growth, leadership development, and social engagement. 
              From student organizations to cultural events, there's something for everyone 
              to explore and enjoy.
            </p>
          </div>
        </div>
      </div>
{/* about text */}
      

      {/* about decription */}
      <div className="about-description">
       <div className="about-desc">
        <img src={pic7} alt="About East View" />
        <div className="about-desc-text">
          <h2>About East View</h2>
          <p>
            East View is more than just an educational institution; it is a community where 
            students are encouraged to explore their passions, develop their skills, and 
            make meaningful contributions to society. Our diverse programs and dedicated faculty 
            ensure that every student receives a well-rounded education that prepares them for 
            success in their future endeavors.
          </p>
       </div>
    </div>

    </div>
<div className="about-description-text">
  <div className="about-desc-text">
    <img src={pic7} alt="Hero" />
    <div className="about-desc-text-content">
      <h2>Diverse course Offering</h2>
      <p>
        At East View, we offer a wide range of courses designed to cater to the diverse interests 
        and career aspirations of our students. From STEM fields to the arts and humanities, 
        our curriculum is designed to provide a comprehensive education that equips students with 
        the knowledge and skills needed to excel in their chosen paths.
      </p>
    </div>
  </div>
</div>

<div className="about-hero">
  <div className="about-hero-text">
    <h2>Foundation of the School</h2>
    <p>
      East View was founded on the principles of academic excellence, integrity, and community 
      service. Our founders envisioned a place where students could receive a holistic education 
      that not only prepares them for careers but also instills in them a sense of responsibility 
      towards society. Today, we continue to uphold these values in everything we do.
    </p>

    <div className="about-hero-detaeils">
      <img src={pic6} alt="Founders" />
      <h3>Our Founders</h3>
      <p>
        The founders of East View were visionary educators and community leaders who recognized 
        the need for a progressive educational institution that would serve the diverse needs 
        of students. Their commitment to quality education and community engagement laid the 
        foundation for what East View has become today.</p>
    </div>

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
</div>
    
  )
}

export default About;