import React from 'react'
import pic7 from './img/pic7.jpg';
import pic6 from './img/pic6.jpg';
import {
   GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Database, 
  Building, 
  Calculator,
  Briefcase,
  FileText,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Users,
  Award,
  Clock,
  Store,
  Share2,
  Youtube,
  Facebook,
  Instagram,
  Send

} from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About East View</h1>
        </div>
      </div>
        
      {/* Hero Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={pic7} 
                  alt="Hero" 
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  Welcome to EastView
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  East View is a leading educational institution dedicated to fostering a culture of 
                  learning, innovation, and community engagement. Our commitment to excellence and 
                  inclusivity shapes the educational journey of every student who walks through our doors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Our Mission */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                At East View, we are committed to providing exceptional educational experiences 
                that foster intellectual growth, critical thinking, and personal development. 
                Our mission is to empower students to become innovative leaders and responsible 
                global citizens.
              </p>
            </div>
            
            {/* Our Values */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">Our Values</h2>
              <p className="text-gray-700 leading-relaxed">
                We believe in excellence, integrity, diversity, and community. These core values 
                guide everything we do, from our academic programs to our campus culture. We 
                strive to create an inclusive environment where every student can thrive and 
                reach their full potential.
              </p>
            </div>
            
            {/* Academic Excellence */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">Academic Excellence</h2>
              <p className="text-gray-700 leading-relaxed">
                Our rigorous academic programs are designed to challenge and inspire students 
                across all disciplines. With state-of-the-art facilities, renowned faculty, 
                and innovative teaching methods, we provide the tools and support necessary 
                for academic success.
              </p>
            </div>
            
            {/* Campus Life */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">Campus Life</h2>
              <p className="text-gray-700 leading-relaxed">
                Beyond academics, East View offers a vibrant campus community with numerous 
                opportunities for personal growth, leadership development, and social engagement. 
                From student organizations to cultural events, there's something for everyone 
                to explore and enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Description Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2">
                <img 
                  src={pic7} 
                  alt="About East View" 
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                  About East View
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  East View is more than just an educational institution; it is a community where 
                  students are encouraged to explore their passions, develop their skills, and 
                  make meaningful contributions to society. Our diverse programs and dedicated faculty 
                  ensure that every student receives a well-rounded education that prepares them for 
                  success in their future endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diverse Course Offering Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden text-white">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <img 
                  src={pic7} 
                  alt="Hero" 
                  className="w-full h-64 lg:h-full object-cover opacity-20 lg:opacity-100"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Diverse Course Offering
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  At East View, we offer a wide range of courses designed to cater to the diverse interests 
                  and career aspirations of our students. From STEM fields to the arts and humanities, 
                  our curriculum is designed to provide a comprehensive education that equips students with 
                  the knowledge and skills needed to excel in their chosen paths.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Foundation Section */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Foundation of the School
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              East View was founded on the principles of academic excellence, integrity, and community 
              service. Our founders envisioned a place where students could receive a holistic education 
              that not only prepares them for careers but also instills in them a sense of responsibility 
              towards society. Today, we continue to uphold these values in everything we do.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <img 
                  src={pic6} 
                  alt="Founders" 
                  className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4">
                  Our Founders
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The founders of East View were visionary educators and community leaders who recognized 
                  the need for a progressive educational institution that would serve the diverse needs 
                  of students. Their commitment to quality education and community engagement laid the 
                  foundation for what East View has become today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
       <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Links Column */}
            <div className="scroll-animate">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Store className="w-5 h-5 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Courses', 'Admissions', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials Column */}
            <div className="scroll-animate">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Share2 className="w-5 h-5 text-green-400" />
                Follow Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors duration-200 group">
                    <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors duration-200 group">
                    <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-colors duration-200 group">
                    <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="scroll-animate">
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Send className="w-5 h-5 text-yellow-400" />
                Contact Info
              </h3>
              <div className="space-y-3">
                <a href="mailto:info@eastviewinstitute.ac.ke" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  info@eastviewinstitute.ac.ke
                </a>
                <a href="tel:+254700000000" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  +254 700 000 000
                </a>
              </div>
            </div>

            {/* Logo Column */}
            <div className="flex flex-col items-center lg:items-end scroll-animate">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 mb-4">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-lg font-bold text-center lg:text-right">East View Training Institute</h4>
              <p className="text-gray-400 text-sm text-center lg:text-right mt-2">Excellence in Education</p>
            </div>
          </div>

          <hr className="border-gray-700 mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 scroll-animate">
            <p className="text-gray-400 text-sm">
              &copy; 2025 East View Training Institute. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About;