import React, { useState } from 'react';
import { Mail, User, Phone, Calendar, GraduationCap, MapPin, AlertCircle, CheckCircle } from 'lucide-react';

export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
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
    'Computer Science',
    'Business Administration',
    'Engineering',
    'Medicine',
    'Arts & Design',
    'Psychology',
    'Mathematics',
    'Literature'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    
    // Basic validation
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'course', 'address', 'city', 'zipCode'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      setMessage('Please fill in all required fields');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setMessage('Sending your enrollment application...');
    setMessageType('loading');

    try {
      const response = await fetch('http://localhost:3001/api/enrollment', {
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
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
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

                <div>
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
                type="button"
                onClick={handleSubmit}
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
      </div>
    </div>
  );
}