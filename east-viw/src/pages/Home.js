import React from 'react'
import pic1 from './img/pic1.jpg';

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
            <img src={pic1} alt="Hero" />
            </div>
          <div className="hero-text">
            <h2>Become a great leader in just a few weeks</h2>
            <p>
              Join our culinary program and learn from experienced chefs. Our hands-on approach ensures you gain practical skills and knowledge to excel in the culinary arts.
          </p>
          </div>
        </div>
    </>
  )
}

export default Home;