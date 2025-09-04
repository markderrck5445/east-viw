import React from 'react';
import { motion } from 'framer-motion';
import pic10 from './img/pic10.jpg';
import { 
  GraduationCap, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle,
  BookOpen,
  Calculator,
  Briefcase,
  Database,
  FileText,
  MapPin,
  Clock,
  Mail,
  Phone,
  Star,
  Youtube,
  Facebook,
  Instagram
} from 'lucide-react';

const EastViewHomepage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  };

  const highlights = [
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Experienced Instructors",
      description: "Learn from industry professionals with real-world expertise"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: "Flexible Programs",
      description: "Study at your own pace with morning and evening classes"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Recognized Certificates",
      description: "Earn credentials that employers trust and value"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Career Growth",
      description: "95% of our graduates advance their careers within 6 months"
    }
  ];

  const programs = [
    {
      icon: <Database className="w-10 h-10 text-purple-600" />,
      title: "Information Science",
      description: "Master data management, information systems, and modern tech tools",
      duration: "6-12 months",
      type: "Certificate/Diploma",
      popular: true
    },
    {
      icon: <Calculator className="w-10 h-10 text-purple-600" />,
      title: "Banking & Finance",
      description: "Comprehensive training in financial principles and banking operations",
      duration: "6-12 months",
      type: "Certificate/Diploma",
      popular: false
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-purple-600" />,
      title: "Sales & Marketing",
      description: "Learn effective sales techniques and digital marketing strategies",
      duration: "6-12 months",
      type: "Certificate/Diploma",
      popular: true
    },
    {
      icon: <BookOpen className="w-10 h-10 text-purple-600" />,
      title: "QuickBooks Mastery",
      description: "Complete QuickBooks training from basics to advanced features",
      duration: "4-6 weeks",
      type: "Short Course",
      popular: true
    },
    {
      icon: <Briefcase className="w-10 h-10 text-purple-600" />,
      title: "Office Management",
      description: "Professional skills for effective office administration",
      duration: "4-6 weeks",
      type: "Short Course",
      popular: false
    },
    {
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      title: "Professional Bookkeeping",
      description: "Master financial record keeping and accounting principles",
      duration: "4-6 weeks",
      type: "Short Course",
      popular: true
    }
  ];

  const qualifications = [
    { level: "Certificate", requirement: "D Grade or Artisan Certificate" },
    { level: "Diploma", requirement: "C- Grade or Certificate" },
    { level: "Higher Diploma", requirement: "Diploma or Degree" }
  ];

  const documents = [
    "Copy of National ID (both sides)",
    "2 colored passport photos",
    "Copy of Educational Certificate",
    "Copy of Birth Certificate"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

       <link 
        href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800;900&display=swap" 
        rel="stylesheet" 
      />
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{ 
          fontFamily: "'Spartan', sans-serif",
           backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-purple-800/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,46,139,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
                  Transform Your 
                  <span className="block bg-gradient-to-r from-purple-400 to-yellow-400 bg-clip-text text-transparent">
                    Future Today
                    At East View Training Institute 
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
                  Join East View Training Institute and unlock your potential with industry-leading programs designed to advance your career.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/enroll'}
                >
                  Enroll Now
                </motion.button>

                <motion.button
                  className="border-2 border-white/50 hover:border-purple-400 text-white hover:text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg transition-colors backdrop-blur-sm bg-white/10 hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/academics'}
                >
                  View Courses
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GraduationCap className="w-16 h-16 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">500+</h3>
                  <p className="text-gray-600">Graduates</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mt-8"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Award className="w-16 h-16 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">15+</h3>
                  <p className="text-gray-600">Programs</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 -mt-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <Users className="w-16 h-16 text-purple-600 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">95%</h3>
                  <p className="text-gray-600">Job Placement</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  <Star className="w-16 h-16 text-yellow-500 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">10+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose East View?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to providing exceptional education that prepares you for real-world success
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <div className="bg-purple-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 lg:py-32 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of certificate, diploma, and short courses designed for career advancement
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                {program.popular && (
                  <div className="absolute -top-4 left-8 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-purple-50 rounded-xl p-4">
                    {program.icon}
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {program.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {program.duration}
                  </span>
                  <motion.button
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Admission Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple, straightforward requirements to get you started on your journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-purple-100 rounded-xl p-3">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Qualifications</h3>
              </div>
              
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">{qual.level}</span>
                    <span className="text-purple-600 font-medium">{qual.requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <p className="text-gray-800">
                  <strong className="text-yellow-600">Not sure if you qualify?</strong> Contact us for a free consultation to find the best path for your situation.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-yellow-100 rounded-xl p-3">
                  <FileText className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Required Documents</h3>
              </div>
              
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-900">{document}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                <p className="text-gray-800">
                  <strong className="text-purple-600">Pro Tip:</strong> Bring originals for verification, but we only need copies for your file.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-32 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <MapPin className="w-10 h-10 text-purple-600" />
                <h2 className="text-4xl font-bold text-gray-900">Visit Our Campus</h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Located in the heart of Nairobi's business district, our modern facilities are easily accessible and equipped with the latest learning technology.
              </p>
              
              <div className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">Mfangano Street, Mitihani House, 2nd Floor</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Landmark</p>
                    <p className="text-gray-600">Right opposite Equity Bank</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Visiting Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <motion.button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-purple-600 to-yellow-500 rounded-2xl p-8 text-white shadow-xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center space-y-6">
                <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold">No Appointment Needed</h3>
                <p className="text-purple-100 leading-relaxed">
                  Drop by anytime during our visiting hours. Tour our facilities, meet our instructors, and get all your questions answered on the spot.
                </p>
                
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-semibold mb-4">Campus Hours</h4>
                  <div className="text-purple-100 space-y-2 text-sm">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-yellow-200 font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Programs', 'Admissions', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.tiktok.com/@myeastview?_t=ZM-8zMJQVY74nG&_r=1" className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition-colors duration-200">
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61577378475137" className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition-colors duration-200">
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/no_visualizer?igsh=MTZyZDl5ZTJ4ZDZmdA==" className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-colors duration-200">
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <a href="mailto:eastviewcollege@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  eastviewcollege@gmail.com
                </a>
                <a href="tel:+254705446230" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  <Phone className="w-4 h-4" />
                  +254 705 446 230
                </a>
              </div>
            </motion.div>

            <motion.div className="flex flex-col items-center lg:items-end" variants={fadeInUp}>
              {/* ETI Logo SVG */}
              <div className="mb-4">
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 200 200" 
                  className="eti-logo"
                >
                  {/* Outer purple circle */}
                  <circle cx="100" cy="100" r="95" fill="#8B2E8B" stroke="#fff" strokeWidth="3"/>
                  
                  {/* Inner white circle */}
                  <circle cx="100" cy="100" r="75" fill="#fff"/>
                  
                  {/* Book with graduation cap */}
                  <g transform="translate(100, 85)">
                    {/* Open book */}
                    <path d="M-25,-10 Q-25,-15 -20,-15 L20,-15 Q25,-15 25,-10 L25,5 Q25,10 20,10 L-20,10 Q-25,10 -25,5 Z" fill="#333"/>
                    <path d="M-25,-10 L0,-5 L25,-10" stroke="#fff" strokeWidth="2" fill="none"/>
                    <path d="M0,-5 L0,10" stroke="#fff" strokeWidth="2"/>
                    
                    {/* Graduation cap */}
                    <path d="M-15,-25 L15,-25 L15,-20 L-15,-20 Z" fill="#333"/>
                    <circle cx="0" cy="-22.5" r="1.5" fill="#8B2E8B"/>
                    <path d="M15,-22.5 L20,-18" stroke="#333" strokeWidth="1"/>
                  </g>
                  
                  {/* Text around the circle */}
                  <path id="top-arc" d="M 30 100 A 70 70 0 0 1 170 100" fill="none"/>
                  <text fontSize="11" fill="#FFD700" fontWeight="bold">
                    <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
                      EASTVIEW TRAINING INSTITUTE
                    </textPath>
                  </text>
                  
                  {/* Bottom banner */}
                  <rect x="20" y="130" width="160" height="25" fill="#333"/>
                  <text x="100" y="147" fontSize="10" fill="#FFD700" textAnchor="middle" fontWeight="bold">
                    Centre of Professional Excellence
                  </text>
                  
                  {/* ETI text */}
                  <text x="100" y="170" fontSize="20" fill="#FFD700" textAnchor="middle" fontWeight="bold">
                    ETI
                  </text>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-center lg:text-right">East View Training Institute</h4>
              <p className="text-gray-400 text-sm text-center lg:text-right mt-2">Center of Excellence</p>
            </motion.div>
          </motion.div>

          <hr className="border-gray-700 mb-8" />

                    <motion.div
                      className="flex flex-col md:flex-row justify-between items-center gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} East View Training Institute. All rights reserved.</span>
                    </motion.div>
                  </div>
                </footer>
              </div>
            );
          };
          
          export default EastViewHomepage;