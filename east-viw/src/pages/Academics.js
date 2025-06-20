import React, { useState } from 'react';

 


const Academic = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { number: '95%', label: 'College Acceptance Rate' },
    { number: '24', label: 'Average Class Size' },
    { number: '40+', label: 'Course Offerings' },
    { number: '10', label: 'Extracurricular Activities' },
    
  ];

  

  const elementaryCourses = [
    {
      title: 'Language Arts',
      description: 'Comprehensive reading, writing, speaking, and listening skills development through literature-based instruction and creative writing.',
      level: 'Core Subject',
      duration: 'Daily'
    },
    {
      title: 'Mathematics',
      description: 'Problem-solving approach to mathematics covering number sense, operations, geometry, measurement, and data analysis.',
      level: 'Core Subject',
      duration: 'Daily'
    },
    {
      title: 'Science Exploration',
      description: 'Hands-on scientific inquiry covering life science, physical science, earth science, and scientific method.',
      level: 'Core Subject',
      duration: '4x/week'
    },
    {
      title: 'Social Studies',
      description: 'Understanding communities, cultures, history, and geography through interactive learning and project-based activities.',
      level: 'Core Subject',
      duration: '4x/week'
    },
    {
      title: 'Arts & Music',
      description: 'Creative expression through visual arts, music appreciation, and performance opportunities.',
      level: 'Enrichment',
      duration: '3x/week'
    },
    {
      title: 'Physical Education',
      description: 'Motor skills development, team sports, fitness, and healthy lifestyle habits.',
      level: 'Enrichment',
      duration: '3x/week'
    }
  ];

  const middleSchoolCourses = [
    {
      title: 'English Language Arts',
      description: 'Advanced reading comprehension, literary analysis, research skills, and expressive writing across multiple genres.',
      level: 'Core Subject',
      duration: 'Daily'
    },
    {
      title: 'Pre-Algebra & Algebra I',
      description: 'Transition from arithmetic to algebraic thinking, including equations, functions, and mathematical reasoning.',
      level: 'Core Subject',
      duration: 'Daily'
    },
    {
      title: 'Life & Physical Science',
      description: 'Laboratory-based science courses covering biology, chemistry, physics, and scientific method.',
      level: 'Core Subject',
      duration: 'Daily'
    },
    {
      title: 'World History & Geography',
      description: 'Comprehensive study of world civilizations, cultures, and geographic regions with emphasis on critical analysis.',
      level: 'Core Subject',
      duration: 'Daily'
    },
    {
      title: 'World Languages',
      description: 'Introduction to Spanish or French with focus on communication, culture, and language acquisition.',
      level: 'Elective',
      duration: 'Daily'
    },
    {
      title: 'Technology & Engineering',
      description: 'Digital literacy, coding basics, robotics, and engineering design process through hands-on projects.',
      level: 'Elective',
      duration: '3x/week'
    }
  ];

  const highSchoolCourses = [
    {
      title: 'AP English Literature',
      description: 'College-level analysis of literature, advanced writing skills, and preparation for AP examination.',
      level: 'AP Course',
      duration: '1 Year'
    },
    {
      title: 'AP Calculus AB/BC',
      description: 'Advanced mathematical concepts including limits, derivatives, integrals, and their applications.',
      level: 'AP Course',
      duration: '1 Year'
    },
    {
      title: 'AP Biology',
      description: 'College-level biology covering molecular biology, genetics, evolution, and ecology with extensive lab work.',
      level: 'AP Course',
      duration: '1 Year'
    },
    {
      title: 'AP Chemistry',
      description: 'Advanced chemistry concepts including atomic structure, bonding, thermodynamics, and kinetics.',
      level: 'AP Course',
      duration: '1 Year'
    },
    {
      title: 'AP U.S. History',
      description: 'Comprehensive study of American history from pre-Columbian times to present with emphasis on historical thinking.',
      level: 'AP Course',
      duration: '1 Year'
    },
    {
      title: 'Computer Science',
      description: 'Programming fundamentals, algorithms, data structures, and software development using modern languages.',
      level: 'Elective',
      duration: '1 Semester'
    },
    {
      title: 'Business & Economics',
      description: 'Principles of economics, business management, entrepreneurship, and financial literacy.',
      level: 'Elective',
      duration: '1 Semester'
    },
    {
      title: 'Fine Arts',
      description: 'Visual arts, music performance, theater, and digital media with opportunities for portfolio development.',
      level: 'Elective',
      duration: '1 Semester'
    }
  ];

  const faculty = [
    {
      name: 'Mr.Samuel Momanyi',
      title: 'Director Of East View Training Institute',
      image:'img/pages/pic6.jpg',
      bio: 'Masters in Information Science.'
    },
    {
      name: 'Ms. Laura ',
      title: 'Dean of Academics',
      initials: 'MJ',
      bio: 'Teaches Communication Skills and Entraprenusrship.'
    },
    {
      name: 'Dr. Partic Brian',
      title: 'Dean of Students in Cor-curricular Activities',
      initials: 'Dr',
      bio: 'Teaches hospitality, Life Skills.'
    },
    {
      name: 'Mr. Kevin Amukhuma',
      title: 'Head of Electrical Engineering Department',
      initials: 'RH',
      bio: 'The Head of the Electrical Engineering Department oversees the academic and administrative functions of the department, ensuring high standards in teaching, research, and student support..'
    },
    {
      name: 'Ms. Angela Martinez',
      title: 'World Languages Coordinator',
      initials: 'AM',
      bio: 'M.A. in Spanish Literature, 10 years of experience. Fluent in Spanish, French, and Portuguese.'
    },
    {
      name: 'Mr. David Wilson',
      title: 'School Administrator',
      initials: 'SD',
      bio: 'The School Administrator is responsible for managing the daily operations of the school, ensuring a safe and productive learning environment for students and staff.'
    }
  ];

  const CourseCard = ({ course }) => (
    <div className="card course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-footer">
        <span className="course-level">{course.level}</span>
        <span className="course-duration">{course.duration}</span>
      </div>
    </div>
  );

  const StatCard = ({ stat }) => (
    <div className="card stat-card">
      <div className="stat-number">{stat.number}</div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );

  const FacultyCard = ({ member }) => (
    <div className="card faculty-card">
      <div className="faculty-avatar">{member.initials}</div>
      <div className="faculty-name">{member.name}</div>
      <div className="faculty-title">{member.title}</div>
      <div className="faculty-bio">{member.bio}</div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'elementary', label: 'Artisan' },
    { id: 'middle', label: 'Certificate' },
    { id: 'high', label: 'Diploma' },
    { id: 'faculty', label: 'Faculty' }
  ];

  return (
    <div className="academic-page">
      {/* Header Section */}
      <div className="header">
        <div className="header-content">
          <h1>Academic Excellence</h1>
          <p>
            Discover our comprehensive academic programs designed to nurture intellectual growth, 
            critical thinking, and prepare students for future success.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="nav-section">
        <div className="nav-content">
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`tab ${activeSection === tab.id ? 'active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="section active">
            <div className="section-intro">
              <h2>Academic Philosophy</h2>
              <p>
                At East View School, we believe in providing a well-rounded education that challenges 
                students intellectually while fostering creativity, critical thinking, and character 
                development. Our curriculum is designed to meet the diverse learning needs of our 
                students while maintaining the highest academic standards.
              </p>
            </div>

            <div className="grid grid-4">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>
        )}

        {/* Elementary Section */}
        {activeSection === 'elementary' && (
          <div className="section active">
            <div className="section-intro">
              <h2>Artisan Courses</h2>
              <p>
                Our Artisan program focuses on building strong foundational skills in literacy, 
                numeracy, science, and social studies while encouraging creativity and curiosity. 
                We use innovative teaching methods and hands-on learning experiences to make 
                education engaging and meaningful.
              </p>
            </div>

            <div className="grid grid-2">
              {elementaryCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* Middle School Section */}
        {activeSection === 'middle' && (
          <div className="section active">
            <div className="section-intro">
              <h2>Middle School (6-8)</h2>
              <p>
                Our middle school program provides a bridge between elementary and high school, 
                offering more specialized instruction while supporting students through their 
                developmental changes. We emphasize critical thinking, independence, and 
                preparation for advanced coursework.
              </p>
            </div>

            <div className="grid grid-2">
              {middleSchoolCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* High School Section */}
        {activeSection === 'high' && (
          <div className="section active">
            <div className="section-intro">
              <h2>High School (9-12)</h2>
              <p>
                Our high school program offers rigorous college-preparatory courses, Advanced 
                Placement options, and diverse electives. We focus on developing independent 
                learners ready for higher education and career success.
              </p>
            </div>

            <div className="grid grid-2">
              {highSchoolCourses.map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
            </div>
          </div>
        )}

        {/* Faculty Section */}
        {activeSection === 'faculty' && (
          <div className="section active">
            <div className="section-intro">
              <h2>Our Distinguished Faculty</h2>
              <p>
                East View School is proud to have a team of dedicated, highly qualified educators 
                who are passionate about teaching and committed to student success. Our faculty 
                members bring diverse backgrounds, advanced degrees, and years of experience to 
                create an enriching learning environment.
              </p>
            </div>

            <div className="grid grid-3">
              {faculty.map((member, index) => (
                <FacultyCard key={index} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Academic;