import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close menu when location changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className="navbar-container" ref={navRef}>
      {/* Hamburger menu button - only visible on mobile */}
      {isMobile && (
        <div className="hamburger-menu">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Single line navbar */}
      <div className={isMobile && !isMenuOpen ? "navbar-hidden" : ""}>
        <div className="single-navbar">
          <div className="container">
            <nav className="navbar-content">
              {/* Brand/Logo */}
              <div className="navbar-brand">
                <div className="brand-link">EastView Trainig Institute</div>
              </div>

              {/* Main navigation links */}
              <ul className="main-nav-links">
                <li>
                  <Link to="/" className={isActive('/')}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={isActive('/about')}>About ETI</Link>
                </li>
                <li>
                  <Link to="/academics" className={isActive('/academics')}>Academics</Link>
                </li>
                <li>
                  <Link to="/admissions" className={isActive('/career')}>Career</Link>
                </li>
                <li>
                  <Link to="/student-portal" className={isActive('/student-portal')}>Student Portal</Link>
                </li>
              </ul>

              {/* Right side contact info */}
              <div className="navbar-contact">
                <span className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89c.39.39 1.02.39 1.41 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  eastview@gmail.com
                </span>
                <span className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254 705 446 230
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobile && isMenuOpen && (
        <div className="mobile-menu-panel">
          <div className="mobile-menu-content">
            <div className="mobile-section">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <Link to="/" className={isActive('/')}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={isActive('/about')}>About ETI</Link>
                </li>
                <li>
                  <Link to="/academics" className={isActive('/academics')}>Academics</Link>
                </li>
                <li>
                  <Link to="/admissions" className={isActive('/career')}>Career</Link>
                </li>
                <li>
                  <Link to="/student-portal" className={isActive('/student-portal')}>Student Portal</Link>
                </li>
              </ul>
            </div>

            <div className="mobile-section">
              <h3>Contact Information</h3>
              <div className="mobile-contact">
                <span className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89c.39.39 1.02.39 1.41 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  eastviewcollege@gmail.com
                </span>
                <span className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +254 705 446 230
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;