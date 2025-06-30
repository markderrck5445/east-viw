import React, { useState } from 'react';
import { Send, User, Mail, Phone, Calendar, MapPin, BookOpen, Users, FileText, AlertCircle, CheckCircle, X } from 'lucide-react';


export default function EnrollmentForm() {
  const [formData, setFormData] = useState({
    // Student Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    Code: '',
    
    // Parent/Guardian Information
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    relationship: '',
    
    // Academic Information
    previousSchool: '',
    gradeLevel: '',
    startDate: '',
    
    // Additional Information
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: '',
    additionalNotes: ''
  });

  const [buttonState, setButtonState] = useState('idle'); // 'idle', 'sending', 'sent', 'error'
  const [showDemo, setShowDemo] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'firstName', 'lastName', 'dateOfBirth', 'gender', 'address', 'city', 'state', 'zipCode',
      'parentName', 'parentEmail', 'parentPhone', 'relationship', 'gradeLevel', 'startDate',
      'emergencyContact', 'emergencyPhone'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return false;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.parentEmail)) {
      console.log('Invalid parent email format');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setButtonState('error');
      setTimeout(() => setButtonState('idle'), 3000);
      return;
    }

    setButtonState('sending');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setButtonState('sent');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '', lastName: '', dateOfBirth: '', gender: '', email: '', phone: '',
          address: '', city: '', state: '', zipCode: '', parentName: '', parentEmail: '',
          parentPhone: '', relationship: '', previousSchool: '', gradeLevel: '', startDate: '',
          medicalConditions: '', emergencyContact: '', emergencyPhone: '', additionalNotes: ''
        });
        setButtonState('idle');
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setButtonState('error');
      setTimeout(() => setButtonState('idle'), 3000);
    }
  };

  const fillDemoData = () => {
    setFormData({
      firstName: 'John',
      lastName: 'Smith',
      dateOfBirth: '2010-05-15',
      gender: 'male',
      email: 'john.smith@email.com',
      phone: '555-0123',
      address: '123 Main Street',
      city: 'Anytown',
      state: 'CA',
      Code: '90210',
      parentName: 'Jane Smith',
      parentEmail: 'jane.smith@email.com',
      parentPhone: '555-0124',
      relationship: 'parent',
      previousSchool: 'Anytown Elementary',
      gradeLevel: '8th',
      startDate: '2024-08-01',
      medicalConditions: 'No known allergies',
      emergencyContact: 'Bob Smith',
      emergencyPhone: '555-0125',
      additionalNotes: 'Student is excited to join the school!'
    });
    setShowDemo(false);
  };

  const getButtonContent = () => {
    switch (buttonState) {
      case 'sending':
        return (
          <>
            <div className="loading-spinner"></div>
            Sending...
          </>
        );
      case 'sent':
        return (
          <>
            <CheckCircle className="button-icon" />
            Sent!
          </>
        );
      case 'error':
        return (
          <>
            <X className="button-icon" />
            Please Check Required Fields
          </>
        );
      default:
        return (
          <>
            <Send className="button-icon" />
            Submit Enrollment Form
          </>
        );
    }
  };

  return (
    <div className="enrollment-container">
      <div className="enrollment-wrapper">
        {/* Header */}
        <div className="enrollment-header">
          <div className="header-icon">
            <BookOpen className="icon-large" />
          </div>
          <h1 className="header-title">Student Enrollment Form</h1>
          <p className="header-subtitle">Please fill out all required information to complete your enrollment</p>
        </div>

        {/* Status Messages */}
        {buttonState === 'sent' && (
          <div className="status-message success">
            <CheckCircle className="status-icon" />
            <span>Enrollment form submitted successfully! We'll contact you soon.</span>
          </div>
        )}

        {buttonState === 'error' && (
          <div className="status-message error">
            <AlertCircle className="status-icon" />
            <span>Please fill in all required fields with valid information and try again.</span>
          </div>
        )}

        {/* Demo Instructions */}
        <div className="demo-instructions">
          <div className="demo-content">
            <AlertCircle className="demo-icon" />
            <div className="demo-text">
              <h3 className="demo-title">Setup Instructions</h3>
              <p className="demo-description">
                This is a fully functional enrollment form. To use it in production:
              </p>
              <ol className="demo-list">
                <li>Sign up for a free account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">Formspree.io</a></li>
                <li>Create a new form and get your unique form ID</li>
                <li>Replace the demo submission logic with the real Formspree endpoint</li>
                <li>Test with real data</li>
              </ol>
              <button onClick={fillDemoData} className="demo-button">
                Fill Demo Data
              </button>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="enrollment-form">
          {/* Student Information Section */}
          <div className="form-section">
            <div className="section-header">
              <User className="section-icon" />
              <h2 className="section-title">Student Information</h2>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Date of Birth *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Gender *</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group-full">
              <label className="form-label">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-grid-three">
              <div className="form-group">
                <label className="form-label">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">ZIP Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div className="form-section">
            <div className="section-header">
              <Users className="section-icon" />
              <h2 className="section-title">Parent/Guardian Information</h2>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Parent/Guardian Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Relationship *</label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Relationship</option>
                  <option value="parent">Parent</option>
                  <option value="guardian">Guardian</option>
                  <option value="grandparent">Grandparent</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Parent Email *</label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Parent Phone *</label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="form-section">
            <div className="section-header">
              <BookOpen className="section-icon" />
              <h2 className="section-title">Academic Information</h2>
            </div>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Previous School</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Grade Level *</label>
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  <option value="">Select Level</option>
                  <option value="1st">Artisan</option>
                  <option value="2nd">Certificate</option>
                  <option value="3rd">Diploma</option>
                  <option value="4th">Higher Diploma</option>
                </select>
              </div>
              
              <div className="form-group-full">
                <label className="form-label">Desired Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="form-section">
            <div className="section-header">
              <FileText className="section-icon" />
              <h2 className="section-title">Additional Information</h2>
            </div>
            
            <div className="form-section-content">
              <div className="form-group-full">
                <label className="form-label">Medical Conditions/Allergies</label>
                <textarea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleInputChange}
                  rows="3"
                  className="form-textarea"
                  placeholder="Please list any medical conditions, allergies, or special needs..."
                />
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Emergency Contact Name *</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group-full">
                <label className="form-label">Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows="4"
                  className="form-textarea"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-container">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={buttonState === 'sending'}
              className={`submit-button ${buttonState}`}
            >
              {getButtonContent()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}