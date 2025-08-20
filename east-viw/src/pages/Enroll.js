import React, { useState, useEffect } from 'react';
import { Mail, User, Phone, GraduationCap, Lock, Eye, EyeOff, CheckCircle, AlertCircle, ArrowRight, LogIn, Calendar, MapPin, CreditCard, UserPlus } from 'lucide-react';

export default function EnhancedEnrollmentForm() {
  const [formData, setFormData] = useState({
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
    emergencyPhone: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiMessage, setApiMessage] = useState('');

  // Backend API configuration
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const courses = [
    'Computer Science',
    'Business Administration', 
    'Engineering',
    'Medicine',
    'Arts & Design',
    'Psychology',
    'Mathematics',
    'Literature',
    'Information Technology',
    'Project Management'
  ];

  const steps = [
    { id: 1, title: 'Personal Info', fields: ['firstName', 'lastName', 'email', 'phone'] },
    { id: 2, title: 'Identity & Birth', fields: ['idnumber', 'dateOfBirth'] },
    { id: 3, title: 'Course & Location', fields: ['course', 'address', 'city', 'zipCode'] },
    { id: 4, title: 'Emergency & Security', fields: ['emergencyContact', 'emergencyPhone', 'password', 'confirmPassword'] }
  ];

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return `${name === 'firstName' ? 'First' : 'Last'} name is required`;
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      
      case 'phone':
        if (!value) return 'Phone number is required';
        const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid phone number';
        return '';

      case 'idnumber':
        if (!value) return 'ID number is required';
        if (value.length < 6) return 'ID number must be at least 6 characters';
        return '';

      case 'dateOfBirth':
        if (!value) return 'Date of birth is required';
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 16) return 'You must be at least 16 years old';
        if (age > 100) return 'Please enter a valid birth date';
        return '';
      
      case 'course':
        if (!value) return 'Please select a course';
        return '';

      case 'address':
        if (!value.trim()) return 'Address is required';
        if (value.trim().length < 10) return 'Please provide a complete address';
        return '';

      case 'city':
        if (!value.trim()) return 'City is required';
        return '';

      case 'zipCode':
        if (!value.trim()) return 'ZIP code is required';
        return '';

      case 'emergencyContact':
        if (!value.trim()) return 'Emergency contact name is required';
        return '';

      case 'emergencyPhone':
        if (!value) return 'Emergency phone number is required';
        const emergencyPhoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!emergencyPhoneRegex.test(value.replace(/\s/g, ''))) return 'Please enter a valid emergency phone number';
        return '';
      
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          return 'Password must contain uppercase, lowercase, and number';
        }
        return '';
      
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const validateStep = (step) => {
    const stepFields = steps[step - 1].fields;
    const newErrors = {};
    
    stepFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    } else {
      // Mark all fields in current step as touched to show errors
      const stepFields = steps[currentStep - 1].fields;
      const newTouched = {};
      stepFields.forEach(field => {
        newTouched[field] = true;
      });
      setTouched(prev => ({ ...prev, ...newTouched }));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const submitToBackend = async (enrollmentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enrollmentData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(4)) {
      const stepFields = steps[3].fields;
      const newTouched = {};
      stepFields.forEach(field => {
        newTouched[field] = true;
      });
      setTouched(prev => ({ ...prev, ...newTouched }));
      return;
    }

    setIsSubmitting(true);
    setApiMessage('');

    try {
      // Prepare data for backend (exclude password confirmation)
      const enrollmentData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        idnumber: formData.idnumber,
        dateOfBirth: formData.dateOfBirth,
        course: formData.course,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
        emergencyContact: formData.emergencyContact,
        emergencyPhone: formData.emergencyPhone
      };

      const result = await submitToBackend(enrollmentData);
      
      setIsSuccess(true);
      setApiMessage(result.message || 'Enrollment submitted successfully! Check your email for confirmation.');
      
      // Reset form after success
      setTimeout(() => {
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
          emergencyPhone: '',
          password: '',
          confirmPassword: ''
        });
        setCurrentStep(1);
        setIsSuccess(false);
        setErrors({});
        setTouched({});
        setApiMessage('');
      }, 5000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setApiMessage(error.message || 'Failed to submit enrollment. Please try again.');
      setErrors(prev => ({
        ...prev,
        submit: error.message || 'Submission failed. Please try again.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName) => {
    return touched[fieldName] ? errors[fieldName] : '';
  };

  const isFieldValid = (fieldName) => {
    return formData[fieldName] && !errors[fieldName] && touched[fieldName];
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Enrollment Successful!</h2>
          <p className="text-gray-600 mb-6 text-lg">{apiMessage}</p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="text-green-800 font-medium">What happens next?</p>
            <ul className="text-green-700 text-sm mt-2 space-y-1">
              <li>• Check your email for confirmation details</li>
              <li>• We'll review your application within 3-5 business days</li>
              <li>• You'll receive further instructions via email</li>
            </ul>
          </div>
          <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">EduPlatform</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Courses</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Enrollment</h2>
          <p className="text-xl text-gray-600">Join thousands of learners advancing their careers</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4 overflow-x-auto">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center min-w-0">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  currentStep === step.id
                    ? 'bg-blue-600 text-white shadow-lg scale-110'
                    : currentStep > step.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle size={20} />
                  ) : (
                    step.id
                  )}
                </div>
                {step.id < steps.length && (
                  <div className={`w-12 h-0.5 mx-1 transition-colors duration-300 ${
                    currentStep > step.id ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
            </p>
          </div>
        </div>

        {/* Error Messages */}
        {errors.submit && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <AlertCircle size={20} className="text-red-600 mr-2" />
              <p className="text-red-800 font-medium">{errors.submit}</p>
            </div>
          </div>
        )}

        {apiMessage && !isSuccess && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-center">
              <AlertCircle size={20} className="text-red-600 mr-2" />
              <p className="text-red-800">{apiMessage}</p>
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            getFieldError('firstName')
                              ? 'border-red-300 bg-red-50 focus:border-red-500'
                              : isFieldValid('firstName')
                              ? 'border-green-300 bg-green-50 focus:border-green-500'
                              : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                          } focus:outline-none`}
                          placeholder="Enter first name"
                        />
                      </div>
                      {getFieldError('firstName') && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {getFieldError('firstName')}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            getFieldError('lastName')
                              ? 'border-red-300 bg-red-50 focus:border-red-500'
                              : isFieldValid('lastName')
                              ? 'border-green-300 bg-green-50 focus:border-green-500'
                              : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                          } focus:outline-none`}
                          placeholder="Enter last name"
                        />
                      </div>
                      {getFieldError('lastName') && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {getFieldError('lastName')}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('email')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('email')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {getFieldError('email') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('email')}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('phone')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('phone')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="+254 748 090 462"
                      />
                    </div>
                    {getFieldError('phone') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('phone')}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Identity & Birth Date */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  {/* ID Number */}
                  <div>
                    <label htmlFor="idnumber" className="block text-sm font-semibold text-gray-700 mb-2">
                      ID Number *
                    </label>
                    <div className="relative">
                      <CreditCard size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        id="idnumber"
                        name="idnumber"
                        value={formData.idnumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('idnumber')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('idnumber')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="Enter your ID number"
                      />
                    </div>
                    {getFieldError('idnumber') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('idnumber')}
                      </p>
                    )}
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <div className="relative">
                      <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        max={new Date(new Date().setFullYear(new Date().getFullYear() - 16)).toISOString().split('T')[0]}
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('dateOfBirth')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('dateOfBirth')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                      />
                    </div>
                    {getFieldError('dateOfBirth') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('dateOfBirth')}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3: Course & Location */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  {/* Course Selection */}
                  <div>
                    <label htmlFor="course" className="block text-sm font-semibold text-gray-700 mb-2">
                      Course Selection *
                    </label>
                    <div className="relative">
                      <GraduationCap size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('course')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('course')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                      >
                        <option value="">Select your course</option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                    {getFieldError('course') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('course')}
                      </p>
                    )}
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                      Address *
                    </label>
                    <div className="relative">
                      <MapPin size={20} className="absolute left-3 top-4 text-gray-400" />
                      <textarea
                        id="address"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 resize-none ${
                          getFieldError('address')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('address')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="Enter your complete address"
                      />
                    </div>
                    {getFieldError('address') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('address')}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* City */}
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('city')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('city')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="Enter city"
                      />
                      {getFieldError('city') && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {getFieldError('city')}
                        </p>
                      )}
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('zipCode')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('zipCode')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="Enter ZIP code"
                      />
                      {getFieldError('zipCode') && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {getFieldError('zipCode')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Emergency Contact & Security */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in slide-in-from-right duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Emergency Contact */}
                    <div>
                      <label htmlFor="emergencyContact" className="block text-sm font-semibold text-gray-700 mb-2">
                        Emergency Contact Name *
                      </label>
                      <div className="relative">
                        <UserPlus size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="emergencyContact"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            getFieldError('emergencyContact')
                              ? 'border-red-300 bg-red-50 focus:border-red-500'
                              : isFieldValid('emergencyContact')
                              ? 'border-green-300 bg-green-50 focus:border-green-500'
                              : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                          } focus:outline-none`}
                          placeholder="Emergency contact name"
                        />
                      </div>
                      {getFieldError('emergencyContact') && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {getFieldError('emergencyContact')}
                        </p>
                      )}
                    </div>

                    {/* Emergency Phone */}
                    <div>
                      <label htmlFor="emergencyPhone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Emergency Phone *
                      </label>
                      <div className="relative">
                        <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          id="emergencyPhone"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 ${
                            getFieldError('emergencyPhone')
                              ? 'border-red-300 bg-red-50 focus:border-red-500'
                              : isFieldValid('emergencyPhone')
                              ? 'border-green-300 bg-green-50 focus:border-green-500'
                              : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                          } focus:outline-none`}
                          placeholder="Emergency phone number"
                        />
                      </div>
                      {getFieldError('emergencyPhone') && (
                        <p className="mt-2 text-sm text-red-600 flex items-center">
                          <AlertCircle size={16} className="mr-2" />
                          {getFieldError('emergencyPhone')}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                      Create Password *
                    </label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-11 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('password')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('password')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {getFieldError('password') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('password')}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-11 pr-11 py-3 border-2 rounded-xl transition-all duration-200 ${
                          getFieldError('confirmPassword')
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : isFieldValid('confirmPassword')
                            ? 'border-green-300 bg-green-50 focus:border-green-500'
                            : 'border-gray-200 focus:border-blue-500 hover:border-gray-300'
                        } focus:outline-none`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    {getFieldError('confirmPassword') && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <AlertCircle size={16} className="mr-2" />
                        {getFieldError('confirmPassword')}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="px-6 py-3 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ArrowRight size={20} className="rotate-180" />
                    <span>Previous</span>
                  </button>
                )}
                
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 shadow-lg"
                  >
                    <span>Next Step</span>
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`ml-auto px-8 py-3 rounded-xl text-white font-semibold transform transition-all duration-200 flex items-center space-x-2 shadow-lg ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enrolling...</span>
                      </>
                    ) : (
                      <>
                        <span>Complete Enrollment</span>
                        <CheckCircle size={20} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already registered?{' '}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center space-x-1 transition-colors duration-200"
            >
              <LogIn size={16} />
              <span>Login here</span>
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}