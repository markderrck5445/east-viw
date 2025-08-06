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
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small random delay to make it feel more natural
            const delay = Math.random() * 200;
            setTimeout(() => {
              entry.target.classList.add('animate-in');
              entry.target.classList.remove('opacity-0');
            }, delay);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
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
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />,
      title: "Sales & Marketing",
      description: "Learn practical sales techniques and marketing strategies that actually work in today's market. We focus on real-world applications rather than just theory.",
      duration: "6-12 months",
      level: "Certificate/Diploma",
      highlight: "High Demand Field"
    },
    {
      icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" />,
      title: "Information Science",
      description: "Get hands-on experience with data management, information systems, and the latest tech tools that companies are actually using.",
      duration: "6-12 months", 
      level: "Certificate/Diploma",
      highlight: "Tech Focused"
    },
    {
      icon: <Building className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />,
      title: "Banking & Finance",
      description: "Understand how money really moves in Kenya's financial sector. Perfect preparation for banking careers or starting your own financial consultancy.",
      duration: "6-12 months",
      level: "Certificate/Diploma", 
      highlight: "Career Ready"
    }
  ];

  const shortCourses = [
    {
      icon: <Calculator className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" />,
      title: "QuickBooks Mastery",
      description: "Master QuickBooks from scratch to advanced features. By the end, you'll be handling real business accounts like a pro.",
      duration: "4-6 weeks",
      level: "Short Course",
      popular: true
    },
    {
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-red-600" />,
      title: "Office Management",
      description: "Learn to run an office smoothly - from handling communications to managing schedules and coordinating teams effectively.",
      duration: "4-6 weeks", 
      level: "Short Course",
      popular: false
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />,
      title: "Professional Bookkeeping",
      description: "Master the art of keeping accurate financial records. Essential skills for any business or if you want to freelance as a bookkeeper.",
      duration: "4-6 weeks",
      level: "Short Course",
      popular: true
    }
  ];

  const qualifications = [
    { level: "Certificate Artisan", requirement: "D- or KCPE Certificate" },
    { level: "Certificate", requirement: "D Grade or Artisan Certificate" },
    { level: "Diploma", requirement: "C- Grade or Certificate" },
    { level: "Higher Diploma/Advanced", requirement: "Diploma or Degree" }
  ];

  const requirements = [
    "Copy of National ID (both sides)",
    "2 colored passport photos", 
    "Copy of Educational Certificate",
    "Copy of Birth Certificate"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .slide-left {
          transform: translateX(-30px) translateY(10px) rotate(-0.5deg);
        }
        
        @media (min-width: 768px) {
          .slide-left {
            transform: translateX(-60px) translateY(20px) rotate(-1deg);
          }
        }
        
        .slide-right {
          transform: translateX(30px) translateY(10px) rotate(0.5deg);
        }
        
        @media (min-width: 768px) {
          .slide-right {
            transform: translateX(60px) translateY(20px) rotate(1deg);
          }
        }
        
        .slide-up {
          transform: translateY(20px);
        }
        
        @media (min-width: 768px) {
          .slide-up {
            transform: translateY(40px);
          }
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateX(0) translateY(0) rotate(0deg) !important;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        @media (hover: hover) {
          .hover-lift:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          
          @media (min-width: 768px) {
            .hover-lift:hover {
              transform: translateY(-8px) scale(1.02);
              box-shadow: 0 20px 40px rgba(0,0,0,0.15);
            }
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(1deg); }
        }
        
        @media (min-width: 768px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .text-shadow {
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        
        @media (min-width: 768px) {
          .text-shadow {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-slate-700 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-shadow">
                  Transform Your Career at
                  <br />
                  <span className="text-orange-400">East View</span>
                  <br />
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-gray-300 font-medium">Training Institute</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Ready to level up your skills? Join hundreds of successful graduates who started their journey right here in Nairobi. We make learning practical, relevant, and focused on getting you hired.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your Journey
                </button>
                <a href="./academics" className="border-2 border-gray-400 hover:bg-gray-400 hover:text-gray-900 text-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 inline-block text-center">
                  View Courses
                </a>
              </div>
            </div>
            <div className="relative lg:justify-self-end flex justify-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 sm:p-8 shadow-xl float-animation transform rotate-1 sm:rotate-2">
                <GraduationCap className="w-20 h-20 sm:w-28 sm:h-28 text-white mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-center text-white">Your Success Starts Here</h3>
                <p className="text-center text-orange-100 mt-1 sm:mt-2 text-sm sm:text-base">Join 500+ Alumni</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="animate-on-scroll slide-left order-2 lg:order-1">
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md border-l-4 border-teal-500 transform -rotate-1 hover-lift">
                <Users className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6 text-teal-600" />
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-800 text-sm sm:text-base">Experienced Local Instructors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-800 text-sm sm:text-base">Flexible Class Times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-800 text-sm sm:text-base">Recognized Certificates</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 animate-on-scroll slide-right order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">
                Become Job-Ready in <span className="text-teal-600">Weeks, Not Years</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                Our instructors have worked in the industries they teach. You'll learn current skills, not outdated theory. Plus, we help connect our best students with employers looking for talent.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-4 sm:p-5 bg-teal-600 text-white rounded-lg shadow-md transform rotate-1">
                  <div className="text-xl sm:text-2xl font-bold">500+</div>
                  <div className="text-teal-100 text-xs sm:text-sm">Happy Graduates</div>
                </div>
                <div className="text-center p-4 sm:p-5 bg-emerald-600 text-white rounded-lg shadow-md transform -rotate-1">
                  <div className="text-xl sm:text-2xl font-bold">95%</div>
                  <div className="text-emerald-100 text-xs sm:text-sm">Find Jobs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Certificate & Diploma Programs
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Comprehensive training that employers actually value. These aren't just certificates - they're your ticket to better opportunities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certificateCourses.map((course, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md hover-lift overflow-hidden border-t-4 animate-on-scroll ${
                  index === 0 ? 'border-t-blue-500 transform rotate-1 slide-left' :
                  index === 1 ? 'border-t-emerald-500 transform slide-right' :
                  'border-t-purple-500 transform -rotate-1 slide-left'
                }`}
                style={{
                  boxShadow: index === 1 ? '0 8px 25px rgba(0,0,0,0.1)' : '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-lg ${
                      index === 0 ? 'bg-blue-100' :
                      index === 1 ? 'bg-emerald-100' : 'bg-purple-100'
                    }`}>
                      {course.icon}
                    </div>
                    <div className="text-right">
                      <span className={`text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${
                        index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-emerald-500' : 'bg-purple-500'
                      }`}>
                        {course.level}
                      </span>
                      <div className={`text-xs font-semibold mt-1 ${
                        index === 0 ? 'text-amber-600' :
                        index === 1 ? 'text-teal-600' : 'text-red-600'
                      }`}>
                        {course.highlight}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{course.title}</h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm">{course.description}</p>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-0">
                    <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      {course.duration}
                    </span>
                    <button className={`text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm ${
                      index === 0 ? 'bg-blue-600 hover:bg-blue-700' :
                      index === 1 ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-purple-600 hover:bg-purple-700'
                    }`}>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-on-scroll slide-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Quick Skills Boost
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
              Short, focused courses perfect for adding specific skills to your resume or starting a side business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {shortCourses.map((course, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md hover-lift overflow-hidden relative animate-on-scroll ${
                  index === 0 ? 'border-r-4 border-r-orange-400 transform -rotate-1 slide-right' :
                  index === 1 ? 'border-b-4 border-b-red-400 transform slide-left' :
                  'border-l-4 border-l-indigo-400 transform rotate-1 slide-right'
                }`}
              >
                {course.popular && (
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                    Popular
                  </div>
                )}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-lg ${
                      index === 0 ? 'bg-orange-100' :
                      index === 1 ? 'bg-red-100' : 'bg-indigo-100'
                    }`}>
                      {course.icon}
                    </div>
                    <span className={`text-gray-800 text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full ${
                      index === 0 ? 'bg-orange-200' :
                      index === 1 ? 'bg-red-200' : 'bg-indigo-200'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{course.title}</h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm">{course.description}</p>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 xs:gap-0">
                    <span className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      {course.duration}
                    </span>
                    <button className={`text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm ${
                      index === 0 ? 'bg-orange-600 hover:bg-orange-700' :
                      index === 1 ? 'bg-red-600 hover:bg-red-700' : 'bg-indigo-600 hover:bg-indigo-700'
                    }`}>
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div className="bg-gray-50 rounded-lg shadow-sm p-6 sm:p-8 animate-on-scroll slide-left hover-lift transform rotate-1">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">What You Need to Join</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className={`flex flex-col xs:flex-row xs:items-center xs:justify-between p-3 sm:p-4 rounded-lg hover:shadow-sm transition-all border-l-3 gap-2 xs:gap-0 ${
                    index === 0 ? 'bg-blue-50 border-l-blue-400' :
                    index === 1 ? 'bg-teal-50 border-l-teal-400' :
                    index === 2 ? 'bg-purple-50 border-l-purple-400' :
                    'bg-amber-50 border-l-amber-400'
                  }`}>
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{qual.level}</span>
                    <span className={`font-medium text-xs sm:text-sm ${
                      index === 0 ? 'text-blue-700' :
                      index === 1 ? 'text-teal-700' :
                      index === 2 ? 'text-purple-700' :
                      'text-amber-700'
                    }`}>{qual.requirement}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mt-4 sm:mt-6 bg-yellow-50 p-3 sm:p-4 rounded-lg border-l-4 border-yellow-400">
                <strong>Not sure if you qualify?</strong> Come visit us and we'll help figure out the best path for your situation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-sm p-6 sm:p-8 animate-on-scroll slide-right hover-lift transform -rotate-1">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-700" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Documents to Bring</h2>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-900 text-sm sm:text-base">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <p className="text-xs sm:text-sm text-orange-800">
                  <strong>Tip:</strong> Bring originals for verification, but we only need copies for your file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-on-scroll slide-left order-2 lg:order-1">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Come Visit Us</h2>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We're right in the heart of Nairobi's business district. Easy to find, easy to reach by matatu, and surrounded by all the amenities you need.
              </p>
              <div className="space-y-3 sm:space-y-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm border-l-4 border-red-500">
                <div className="flex items-center gap-3 text-gray-800">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base"><strong>Address:</strong> Mfangano Street, Mitihani House, 2nd Floor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base"><strong>Landmark:</strong> Right opposite Equity Bank</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base"><strong>Best time to visit:</strong> Mon-Fri, 9AM-5PM</span>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover-lift shadow-md text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                Get Directions
              </button>
            </div>
            <div className="animate-on-scroll slide-right order-1 lg:order-2">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-6 sm:p-8 text-white shadow-lg hover-lift transform rotate-1 sm:rotate-2">
                <div className="text-center space-y-4 sm:space-y-6">
                  <div className="p-3 sm:p-4 bg-white/20 rounded-full inline-block">
                    <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-orange-200" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Drop By Anytime</h3>
                  <p className="text-orange-100 leading-relaxed text-sm sm:text-base">
                    No appointment needed! Come check out our classrooms, meet our instructors, and get all your questions answered.
                  </p>
                  <div className="bg-white/15 rounded-lg p-3 sm:p-4">
                    <p className="font-semibold mb-2 text-sm sm:text-base">Our Hours</p>
                    <div className="text-orange-100 text-xs sm:text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-yellow-200 font-medium">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="animate-on-scroll slide-left">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                <Store className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {['Home', 'About Us', 'Courses', 'Admissions', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-orange-400 transition-all duration-200 hover:translate-x-2 transform inline-block text-sm sm:text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-on-scroll slide-right">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400" />
                Follow Our Journey
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-all duration-200 group text-sm sm:text-base">
                    <Youtube className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-200 group text-sm sm:text-base">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-pink-500 transition-all duration-200 group text-sm sm:text-base">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate-on-scroll slide-left">
              <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-4 sm:mb-6">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                Get in Touch
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <a href="mailto:info@eastviewinstitute.ac.ke" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base break-all sm:break-normal">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  info@eastviewinstitute.ac.ke
                </a>
                <a href="tel:+254700000000" className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors duration-200 text-sm sm:text-base">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  +254 700 000 000
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end animate-on-scroll slide-right">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-lg p-4 sm:p-6 mb-3 sm:mb-4 hover-lift transform -rotate-1 sm:-rotate-2">
                <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-center lg:text-right">East View Training Institute</h4>
              <p className="text-gray-400 text-xs sm:text-sm text-center lg:text-right mt-1 sm:mt-2">Where Careers Begin</p>
            </div>
          </div>

          <hr className="border-gray-600 mb-6 sm:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 animate-on-scroll slide-up">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy; 2025 East View Training Institute. Making dreams come true, one student at a time.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;