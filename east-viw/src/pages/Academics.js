import React, { useState } from 'react';

 


const Academic = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { number: '95%', label: 'College Acceptance Rate' },
    { number: '24', label: 'Average Class Size' },
    { number: '40+', label: 'Course Offerings' },
    { label: 'Extracurricular Activities' },
    
  ];

  

  const elementaryCourses = [
    {
      title: 'Languages ',
      description: 'Comprehensive reading, writing, speaking, and listening skills development through literature-based instruction and creative writing.',
      level: 'Ksh 15,000',
      duration: 'Daily'
    },
    {
      title: 'Salesmanship',
      description: 'Salesmanship is a course that focuses on the art and techniques of selling products or services effectively.',
      level: 'Ksh 12,000',
      duration: '4 TERMS'
    },
    {
      title: 'Store Keeping',
      description: 'Store Keeping is a course that teaches students the principles and practices of managing inventory and supplies within an organization. Learners will gain skills in stock control, record keeping, inventory management, and the proper handling and storage of goods.',
      level: 'Ksh 12,000',
      duration: '4 TERMS'
    },
    {
      title: 'Food and Beverage',
      description: 'Food and Beverage is a course designed to provide students with knowledge and practical skills in the preparation, service, and management of food and drinks',
      level: 'Ksh 12,000',
      duration: '4 TERMS'
    },
    {
      title: 'Arts & Music',
      description: 'Creative expression through visual arts, music appreciation, and performance opportunities.',
      level: 'Ksh 12,000',
      duration: '3x/week'
    },
    {
      title: 'Electrical Engineering',
      description: 'Electrical Engineering is a course that equips students with the knowledge and skills needed to design, develop, and maintain electrical systems and equipment.',
      level:'Ksh 12,000',
      duration: '4 TERMS'
    }
  ];

  const middleSchoolCourses = [
    {
      title: 'Social Works',
      description: 'Social Work is a course that prepares students to support individuals, families, and communities in overcoming challenges and improving their well-being.',
      level: 'Ksh 12,000',
      duration: '4 TERMS'
    },
    {
      title: 'Project Development',
      description: 'Project Development is a course that teaches students the essential steps involved in planning, executing, and managing projects from start to finish.',
      level: 'ksh 12,000',
      duration: '4 TERMS'
    },
    {
      title: 'Archive Information Studies',
      description: 'Archive Information Studies is a course focused on the principles and practices of managing, preserving, and organizing records and archival materials.',
      level: 'Ksh 12,000',
      duration: '4 TERMS'
    },
    {
      title: 'ECDE',
      description: 'ECDE (Early Childhood Development and Education) is a course designed to equip students with the knowledge and skills needed to support the growth and learning of young children.',
      level: 'Ksh 15,000',
      duration: '12 MONTHS'
    },
    {
      title: 'Accountancy',
      description: 'Introduction to Spanish or French with focus on communication, culture, and language acquisition.',
      level: 'Ksh 12,000',
      duration: '12 MONTHS'
    },
    {
      title: 'Technology & Engineering',
      description: 'Digital literacy, coding basics, robotics, and engineering design process through hands-on projects.',
      level: 'ksh 20,000',
      duration: '3x/week'
    },
    {
      title: 'Technology & Engineering',
      description: 'Digital literacy, coding basics, robotics, and engineering design process through hands-on projects.',
      level: 'Ksh 12,000',
      duration: '3x/week'
    }
  ];

  const highSchoolCourses = [
    {
      title: 'Community and Social Work',
      description: 'Community and Social Work is a course that prepares students to support and empower individuals, families, and communities facing social challenges.',
      level: 'ksh 15,000',
      duration: '24 MONTHS'
    },
    {
      title: 'Project Development',
      description: 'Project Development is a course that teaches students the key processes involved in initiating, planning, executing, and completing projects successfully.',
      level: 'ksh 15,000',
      duration: '18 MONTHS'
    },
    {
      title: 'HIV/ Testing and Counseling',
      description: 'College-level biology covering molecular biology, genetics, evolution, and ecology with extensive lab work.',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title: 'Community Health and Development',
      description: 'Advanced chemistry concepts including atomic structure, bonding, thermodynamics, and kinetics.',
      level: 'Ksh 18,000',
      duration: 'Ksh 18,000'
    },
    {
      title: 'Criminology',
      description: 'Criminology is a course that examines the nature, causes, and consequences of crime in society. Students explore topics such as criminal behavior, the justice system, crime prevention, and the social and psychological factors influencing criminal activity. ',
      level: 'Ksh 18,000',
      duration: '12 MONTHS'
    },
    {
      title: 'Computer Science',
      description: 'Programming fundamentals, algorithms, data structures, and software development using modern languages.',
      level: 'ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title: 'Business & Economics',
      description: 'Principles of economics, business management, entrepreneurship, and financial literacy.',
      level: 'Ksh 18,000',
      duration: '1 Semester'
    },
    {
      title: 'Accountancy',
      description: 'Accountancy is a course that provides students with essential knowledge and practical skills in financial management, bookkeeping, and accounting principles. The curriculum includes topics such as preparing financial statements, managing budgets, auditing, and tax compliance. Students learn how to accurately record and analyze financial transactions, preparing them for careers in accounting, finance, and business administration.',
      level: 'Ksh 15,000',
      duration: '1 Semester'
    },
    {
      title: 'Hospitality Management',
      description: 'Hospitality Management is a course that prepares students for careers in the hospitality industry, focusing on the management and operation of hotels, restaurants, and other service-oriented businesses. ',
      level: 'Ksh 18,000',  
      duration: '18 MONTHS'
    },
    {
      title:'Supply Chain Management',
      description: 'Supply Chain Management is a course that focuses on the efficient management of the flow of goods, services, and information from suppliers to customers.',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title:'Secretarial Management',
      description: 'Secretarial Management is a course that trains students in the essential skills required to efficiently manage office operations and administrative tasks. The curriculum covers areas such as office organization, communication, record keeping, scheduling, and the use of office technology. ',
      level: 'Ksh 15,000',
      duration: '18 MONTHS'
    },
    {
      title:'Sales and Marketing',
      description: 'Sales and Marketing is a course designed to equip students with the knowledge and skills needed to effectively promote and sell products or services. The curriculum covers key areas such as market research, consumer behavior, sales techniques, branding, advertising, and digital marketing.',
      level: 'Ksh 15,000',
      duration: '18 MONTHS'
    },
    {
      title:'Human Resource Management',
      description: 'Human Resource Management is a course that focuses on the effective management of people within an organization. Students learn about recruitment, training and development, performance management, employee relations, and labor laws. ',
      level: 'Ksh 15,000',
      duration: '18 MONTHS'
    },
    {
      title:'Banking and Finance',
      description: 'Supply Chain Management is a course that focuses on the efficient management of the flow of goods, services, and information from suppliers to customers.',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title:'Maritme Transport and Logistics',
      description: 'Maritime Transport and Logistics is a course that provides students with knowledge and skills related to the movement of goods and people by sea. The curriculum covers topics such as shipping operations, port management, supply chain logistics, maritime safety, and international trade regulations.',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title:'Internatiolal Freight Management',
      description: 'International Freight Management is a course that focuses on the efficient movement of goods across international borders. Students learn about global shipping procedures, customs regulations, documentation, freight forwarding, and logistics planning. ',
      level: 'Ksh 15,000',
      duration: '18 MONTHS'
    },
    {
      title:'Public Relations and Communication',
      description: 'Public Relations and Communication is a course that equips students with the skills needed to manage an organization’s image and effectively communicate with various audiences. The curriculum covers topics such as media relations, corporate communication, event planning, crisis management, and strategic messaging. ',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title:'Front Office Management',
      description: 'Front Office Management is a course that prepares students to efficiently oversee the operations of a front office in hospitality and business environments. The curriculum covers areas such as reception duties, guest relations, reservation systems, communication skills, and office administration. Students gain practical experience in managing front desk activities, handling customer inquiries, and ensuring smooth day-to-day operations, equipping them for roles in hotels, offices, and customer service centers.',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
    },
    {
      title:'Customer Service Management',
      description: 'Customer Service Management is a course that teaches students how to effectively handle customer interactions and ensure high levels of satisfaction. The curriculum covers topics such as communication skills, problem-solving, conflict resolution, and customer relationship management.',
      level: 'Ksh 18,000',
      duration: '18 MONTHS'
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
              <h2>Certificate Courses</h2>
              <p>
               These courses are ideal for individuals seeking to enhance their qualifications, start a new career, or gain expertise in a particular area. Certificate Courses are typically shorter in duration and focus on hands-on training, making them a valuable option for both beginners and professionals looking to upskill
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
              <h2>Diploma Courses</h2>
              <p>
                Diploma Courses are comprehensive programs designed to provide in-depth knowledge and practical skills in a specific field of study. These courses are ideal for individuals seeking to enhance their qualifications, start a new career, or gain expertise in a particular area. Diploma Courses are typically longer in duration and focus on hands-on training, making them a valuable option for both beginners and professionals looking to upskill.
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