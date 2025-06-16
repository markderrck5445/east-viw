import React from 'react'
import pic7 from './img/pic7.jpg';

function About() {
  return (
    <div>
       <div className="about-container">
        <h1>About East View</h1>
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

    </div>
  )
}

export default About;