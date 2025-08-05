import React, { useState } from 'react';
import { Mail, User, Phone, Idnumber, Calendar, GraduationCap, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idnumber: '', // ✅ Fixed: was 'idumber'
    dateOfBirth: '',
    course: '',
    address: '',
    city: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const courses = [
    'Diploma in Computer Science', // ✅ Fixed: was 'inComputer'
    'Diploma in Business Administration',
    'Diploma in Engineering',
    'Diploma in Medicine',
    'Diploma in Arts & Design',
    'Diploma in Psychology',
    'Diploma in Mathematics',
    'Diploma in Literature',
    'Diploma in Programming',
    'Diploma in Information Technology',
    'Diploma in Information Science',
    'Diploma in Community and Information Systems',
    'Diploma in Information Communication Technology',
    'Diploma in Computer Engineering',
    'Diploma in Electrical and Electronics Engineering',
    'Diploma in Mechanical Engineering',
    'Diploma in Community and Social Work', // ✅ Fixed: was 'COmmunity'
    'Diploma in Project Development',
    'Diploma in Community and Health Development',
    'Diploma in Archive Information Study',
    'Diploma in Criminology and Security Studies',
    'Diploma in Counselling Psychology',
    'Diploma in ECDE',
    'Diploma in Salesmanship',
    'Diploma in Store Keeping and Management',
    'Diploma in Supply Chain Management',
    'Diploma in Business Management',
    'Diploma in Secretarial Studies Management',
    'Diploma in Human and Resource Management',
    'Diploma in Banking and Finance',
    'Diploma in Accountancy',
    'Diploma in Maritime and Shipping Management', // ✅ Fixed: was 'MAritime'
    'Diploma in International Freight and Logistics Management', // ✅ Fixed: was 'Frieght'
    'Diploma in Public Relations',
    'Diploma in Front Office Management',
    'Diploma in Customer Service Management',
    'Diploma in Property Management',
    'Diploma in Project Management',
    'Diploma in Clearing and Forwarding',
    'Certificate in Computer Science', // ✅ Fixed: was 'inComputer'
    'Certificate in Business Administration',
    'Certificate in Engineering',
    'Certificate in Medicine',
    'Certificate in Arts & Design',
    'Certificate in Psychology',
    'Certificate in Mathematics',
    'Certificate in Literature',
    'Certificate in Programming',
    'Certificate in Information Technology',
    'Certificate in Information Science',
    'Certificate in Community and Information Systems',
    'Certificate in Information Communication Technology',
    'Certificate in Computer Engineering',
    'Certificate in Electrical and Electronics Engineering',
    'Certificate in Mechanical Engineering',
    'Certificate in Community and Social Work', // ✅ Fixed: was 'COmmunity'
    'Certificate in Project Development',
    'Certificate in Community and Health Development',
    'Certificate in Archive Information Study',
    'Certificate in Criminology and Security Studies',
    'Certificate in Counselling Psychology',
    'Certificate in ECDE', // ✅ Fixed: was 'Certificatein'
    'Certificate in Salesmanship',
    'Certificate in Store Keeping and Management',
    'Certificate in Supply Chain Management',
    'Certificate in Business Management',
    'Certificate in Secretarial Studies Management',
    'Certificate in Human and Resource Management',
    'Certificate in Banking and Finance',
    'Certificate in Accountancy',
    'Certificate in Maritime and Shipping Management', // ✅ Fixed: was 'MAritime'
    'Certificate in International Freight and Logistics Management', // ✅ Fixed: was 'Frieght'
    'Certificate in Public Relations',
    'Certificate in Front Office Management',
    'Certificate in Customer Service Management',
    'Certificate in Property Management',
    'Certificate in Project Management',
    'Certificate in Clearing and Forwarding',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Added: prevent default form submission
    
    // ✅ Fixed: Safe validation with fallback for undefined values
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'idnumber', 'dateOfBirth', 'course', 'address', 'city', 'zipCode'];
    const missingFields = requiredFields.filter(field => !(formData[field] || '').trim());
    
    if (missingFields.length > 0) {
      setMessage(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setMessageType('error');
      return;
    }

    // ✅ Added: Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setMessage('Sending your enrollment application...');
    setMessageType('loading');

    try {
      // ✅ Updated: Use your actual server IP if needed
      const response = await fetch("https://enrollment-backend.onrender.com/api/route", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Enrollment application submitted successfully! Check your email for confirmation.');
        setMessageType('success');
        
     
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          idnumber: '', 
          dateOfBirth: '',
          course: '',
          address: '',
          city: '',
          zipCode: '',
          emergencyContact: '',
          emergencyPhone: ''
        });
      } else {
        setMessage(data.message || 'Failed to submit enrollment');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to connect to server. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 text-center">
          <div className="bg-white bg-opacity-20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
            <GraduationCap size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-2">Student Enrollment</h1>
          <p className="text-xl opacity-90">Join our academic community today</p>
        </div>

       
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            {/* Status Message */}
            {message && (
              <div className={`p-4 rounded-lg mb-6 flex items-center gap-3 ${
                messageType === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                messageType === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {messageType === 'success' && <CheckCircle size={20} />}
                {messageType === 'error' && <AlertCircle size={20} />}
                {messageType === 'loading' && (
                  <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                )}
                <span>{message}</span>
              </div>
            )}

            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-5 flex items-center gap-3">
                  <User size={24} />
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="0748 090 462"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      name="idnumber" 
                      value={formData.idnumber} 
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="34576322"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Selection *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-white"
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-5 flex items-center gap-3">
                  <MapPin size={24} />
                  Address Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="123 Main Street"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="Your city"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="12345"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-5">
                  Emergency Contact (Optional)
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Name
                    </label>
                    <input
                      type="text"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="Emergency contact name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500"
                      placeholder="0748 090 462"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit" // ✅ Changed: was type="button"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail size={20} />
                      Submit Enrollment
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="text-center mt-8 text-sm text-gray-600">
              <p>* Required fields</p>
              <p>You will receive a confirmation email after submission.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}