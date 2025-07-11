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

  // Body class management for preventing scroll when menu is open
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobile, isMenuOpen]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Logo component for reusability
  const LogoComponent = ({ className = "" }) => (
    <div className={`logo-container ${className}`}>
      <img 
        src="/api/placeholder/120/40" 
        alt="ETI Institute Logo" 
        className="logo-image"
        onError={(e) => {
          // Fallback if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'inline-block';
        }}
      />
      <span className="logo-text-fallback" style={{ display: 'none' }}>ETI</span>
    </div>
  );

  return (
    <div className="navbar-container" ref={navRef}>
      {/* Single line navbar - always visible */}
      <div className="single-navbar">
        <div className="container">
          <nav className="navbar-content">
            {/* Brand/Logo */}
            <div className="navbar-brand">
              <Link to="/" className="brand-link">
                <LogoComponent className="desktop-logo" />
              </Link>
            </div>

            {/* Main navigation links - hidden on mobile */}
            {!isMobile && (
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
                  <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                </li>
                <li>
                  <Link to="/Enroll" className={isActive('/Enroll')}>Enroll</Link>
                </li>
              </ul>
            )}

            {/* Right side - contact info on desktop, hamburger on mobile */}
            <div className="navbar-right">
              {!isMobile ? (
                <div className="navbar-contact">
                </div>
              ) : (
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
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile menu panel with overlay */}
      {isMobile && isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}></div>
          
          {/* Mobile menu panel */}
          <div className="mobile-menu-panel">
            {/* Mobile menu header with logo */}
            <div className="mobile-menu-header">
              <Link to="/" className="mobile-brand-link">
                <LogoComponent className="mobile-logo" />
              </Link>
              <button 
                className="mobile-close-btn"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mobile-menu-content">
              <div className="mobile-section">
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
                    <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                  </li>
                  <li>
                    <Link to="/Enroll" className={isActive('/Enroll')}>Enroll</Link>
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
                    +254 705 446 230/+254 700 123 456
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        /* Logo Styling */
        .logo-container {
          display: flex;
          align-items: center;
          height: 100%;
        }

        .logo-image {
          height: 40px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
        }

        .logo-text-fallback {
          font-size: 24px;
          font-weight: bold;
          color: #333;
        }

        .brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          height: 100%;
        }

        .mobile-brand-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        /* Desktop Logo */
        .desktop-logo .logo-image {
          height: 40px;
        }

        /* Mobile Logo */
        .mobile-logo .logo-image {
          height: 35px;
        }

        /* Mobile Menu Header */
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid #eee;
          background: #fff;
        }

        .mobile-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .mobile-close-btn:hover {
          background-color: #f5f5f5;
        }

        /* Base Navbar Styles */
        .navbar-container {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .single-navbar {
          background: #fff;
          border-bottom: 1px solid #eee;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
        }

        .main-nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2rem;
        }

        .main-nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.2s;
        }

        .main-nav-links a:hover,
        .main-nav-links a.active {
          color: #007bff;
        }

        .navbar-right {
          display: flex;
          align-items: center;
        }

        .hamburger-menu button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .hamburger-menu button:hover {
          background-color: #f5f5f5;
        }

        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 998;
        }

        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
          background: #fff;
          z-index: 999;
          transform: translateX(0);
          transition: transform 0.3s ease;
          overflow-y: auto;
        }

        .mobile-menu-content {
          padding: 1rem;
        }

        .mobile-section {
          margin-bottom: 2rem;
        }

        .mobile-section h3 {
          margin: 0 0 1rem 0;
          color: #333;
          font-size: 1.1rem;
        }

        .mobile-section ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-section li {
          margin-bottom: 0.5rem;
        }

        .mobile-section a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          padding: 0.5rem 0;
          display: block;
          transition: color 0.2s;
        }

        .mobile-section a:hover,
        .mobile-section a.active {
          color: #007bff;
        }

        .mobile-contact {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          font-size: 0.9rem;
        }

        /* Prevent body scroll when mobile menu is open */
        :global(body.mobile-menu-open) {
          overflow: hidden;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .main-nav-links {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu-panel {
            width: 100vw;
          }
        }
      `}</style>
    </div>
  );
}

export default Navbar;