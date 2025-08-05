import React, { useEffect, useRef } from 'react';
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

function Home() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with the scroll-animate class
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const certificateCourses = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Sales and Marketing",
      description: "Master dynamic sales strategies and marketing principles to promote products and services effectively in today's competitive market.",
      duration: "6-12 months",
      level: "Certificate/Diploma"
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Information Science",
      description: "Learn to collect, organize, manage, and disseminate information using cutting-edge technologies and methodologies.",
      duration: "6-12 months",
      level: "Certificate/Diploma"
    },
    {
      icon: <Building className="w-8 h-8 text-purple-600" />,
      title: "Banking and Finance",
      description: "Gain comprehensive knowledge of financial sector principles, banking operations, and modern finance practices.",
      duration: "6-12 months",
      level: "Certificate/Diploma"
    }
  ];

  const shortCourses = [
    {
      icon: <Calculator className="w-8 h-8 text-orange-600" />,
      title: "QuickBooks",
      description: "Master QuickBooks software through hands-on learning with real-world accounting scenarios and practical applications.",
      duration: "4-6 weeks",
      level: "Short Course"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-red-600" />,
      title: "Office Management",
      description: "Develop essential skills to efficiently run and organize office operations in modern business environments.",
      duration: "4-6 weeks",
      level: "Short Course"
    },
    {
      icon: <FileText className="w-8 h-8 text-indigo-600" />,
      title: "Book Keeping",
      description: "Learn systematic recording, organizing, and managing of financial transactions for businesses and organizations.",
      duration: "4-6 weeks",
      level: "Short Course"
    }
  ];

  const qualifications = [
    { level: "Certificate Artisan", requirement: "D- or KCPE" },
    { level: "Certificate", requirement: "D or Artisan" },
    { level: "Diploma", requirement: "C- or Certificate" },
    { level: "Higher Diploma/Advance", requirement: "Diploma or Degree" }
  ];

  const requirements = [
    "Copy of National ID",
    "Colored passport photos",
    "Copy of Educational Certificate",
    "Copy of Birth Certificate"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .scroll-animate:nth-child(1) { transition-delay: 0ms; }
        .scroll-animate:nth-child(2) { transition-delay: 100ms; }
        .scroll-animate:nth-child(3) { transition-delay: 200ms; }
        .scroll-animate:nth-child(4) { transition-delay: 300ms; }
        .scroll-animate:nth-child(5) { transition-delay: 400ms; }
        .scroll-animate:nth-child(6) { transition-delay: 500ms; }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Welcome to <span className="text-yellow-400">East View</span>
                  <br />
                  <span className="text-3xl lg:text-5xl text-blue-200">Training Institute</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Enrollment at East View is designed to be a seamless and supportive experience for every prospective student. We welcome individuals from diverse backgrounds who are eager to pursue excellence and personal growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Enroll Now
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <GraduationCap className="w-32 h-32 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-center text-white">Excellence in Education</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Promise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative scroll-animate">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
                <Users className="w-16 h-16 mb-6 text-yellow-300" />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg">Expert Instructors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg">Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg">Industry Recognition</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 scroll-animate">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Become a Great Leader in Just a Few Weeks
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Join our comprehensive programs and learn from experienced lecturers. Our hands-on approach ensures you gain practical skills and knowledge to excel in your chosen field and become an industry leader.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Graduates</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-gray-600">Job Placement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate/Diploma Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certificate & Diploma Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to provide you with industry-relevant skills and knowledge
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificateCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden scroll-animate">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    {course.icon}
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Short Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Intensive programs perfect for skill enhancement and career advancement
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shortCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 scroll-animate">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    {course.icon}
                    <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Qualifications & Registration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Entry Qualifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 scroll-animate">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Entry Qualifications</h2>
              </div>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="font-medium text-gray-900">{qual.level}</span>
                    <span className="text-blue-600 font-semibold">{qual.requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Requirements */}
            <div className="bg-white rounded-2xl shadow-lg p-8 scroll-animate">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="w-8 h-8 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Registration Requirements</h2>
              </div>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-900">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-animate">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-red-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are strategically located in the heart of Nairobi, along Mfangano Street, Mitihani House Second Floor, opposite Equity Bank. Our central location makes it convenient for students to access our facilities and resources.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Mfangano Street, Mitihani House, 2nd Floor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Building className="w-5 h-5 text-red-600" />
                  <span>Opposite Equity Bank</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span>Nairobi CBD, Kenya</span>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl scroll-animate">
              <div className="text-center space-y-6">
                <MapPin className="w-16 h-16 mx-auto text-yellow-300" />
                <h3 className="text-2xl font-bold">Visit Us Today</h3>
                <p className="text-red-100">
                  Come and explore our modern facilities and meet our experienced faculty members.
                </p>
                <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold">Office Hours</p>
                  <p className="text-red-100">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-red-100">Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
  );
}

export default Home;