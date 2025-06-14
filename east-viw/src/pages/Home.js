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
              <h3>Certificate in Culinary Arts</h3>
              <p>Duration: 6 months</p>
              <p>Learn the fundamentals of culinary arts, including cooking techniques, food safety, and kitchen management.</p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Certificate in Culinary Arts</h3>
              <p>Duration: 6 months</p>
              <p>Learn the fundamentals of culinary arts, including cooking techniques, food safety, and kitchen management.</p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Certificate in Culinary Arts</h3>
              <p>Duration: 6 months</p>
              <p>Learn the fundamentals of culinary arts, including cooking techniques, food safety, and kitchen management.</p>
              </div>
          </div>

        </div>

          <div className="courses-section">
            <h1>Short course</h1>
           </div>
         <div className="courses-list">
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Certificate in Culinary Arts</h3>
              <p>Duration: 6 months</p>
              <p>Learn the fundamentals of culinary arts, including cooking techniques, food safety, and kitchen management.</p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Certificate in Culinary Arts</h3>
              <p>Duration: 6 months</p>
              <p>Learn the fundamentals of culinary arts, including cooking techniques, food safety, and kitchen management.</p>
              </div>
          </div>
          <div className="course-item">
             <img src={pic1} alt="Hero" />
             <div className="course-details">
              <h3>Certificate in Culinary Arts</h3>
              <p>Duration: 6 months</p>
              <p>Learn the fundamentals of culinary arts, including cooking techniques, food safety, and kitchen management.</p>
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
      
 

    </>
  )
}

export default Home;