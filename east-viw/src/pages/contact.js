import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  // Admin email - replace with your actual admin email
  const ADMIN_EMAIL = 'nguyagwamarkderrick@gmail.com';
   const COMPANY_NAME = 'East View Training Institute'; 
  const COMPANY_EMAIL = 'nguyagwamarkderrick@gmail.com'; 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (emailData) => {
    // Method 1: EmailJS (Requires setup)
    const useEmailJS = false; // Set to true when you have EmailJS configured
    
    if (useEmailJS) {
      try {
        // Import EmailJS dynamically
        const emailjs = await import('@emailjs/browser');
        
        const result = await emailjs.send(
          'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
          {
            to_name: 'Admin',
            from_name: `${emailData.firstName} ${emailData.lastName}`,
            from_email: emailData.email,
            message: emailData.message,
            reply_to: emailData.email
          },
          'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
        );
        
        return { success: true, method: 'emailjs' };
      } catch (error) {
        console.error('EmailJS Error:', error);
        // Fall through to alternative methods
      }
    }
    
    // Method 2: Backend API (Recommended for production)
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: emailData.firstName,
          lastName: emailData.lastName,
          email: emailData.email,
          message: emailData.message,
          adminEmail: ADMIN_EMAIL
        })
      });

      if (response.ok) {
        return { success: true, method: 'backend' };
      } else {
        throw new Error('Backend API failed');
      }
    } catch (error) {
      console.error('Backend API Error:', error);
    }

    // Method 3: Web3Forms (Simple alternative - no backend needed)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '1fa95fbd-4eab-83da-703a06dba72',
          name: `${emailData.firstName} ${emailData.lastName}`,
          email: emailData.email,
          message: emailData.message,
          to: ADMIN_EMAIL,
          subject: `Contact Form Submission from ${emailData.firstName} ${emailData.lastName}`
        })
      });

      const result = await response.json();
      if (result.success) {
        return { success: true, method: 'web3forms' };
      } else {
        throw new Error('Web3Forms failed');
      }
    } catch (error) {
      console.error('Web3Forms Error:', error);
    }

    // Method 4: Formspree (Another simple alternative)
    try {
      const response = await fetch('https://formspree.io/f/xjkranqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${emailData.firstName} ${emailData.lastName}`,
          email: emailData.email,
          message: emailData.message,
          _replyto: emailData.email,
          _subject: `Contact Form Submission from ${emailData.firstName} ${emailData.lastName}`
        })
      });

      if (response.ok) {
        return { success: true, method: 'formspree' };
      } else {
        throw new Error('Formspree failed');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
    }
    
    // Method 5: Mailto fallback (Always works but requires user action)
    const subject = encodeURIComponent(`Contact Form Submission from ${emailData.firstName} ${emailData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${emailData.firstName} ${emailData.lastName}\n` +
      `Email: ${emailData.email}\n\n` +
      `Message:\n${emailData.message}\n\n` +
      `Please reply to: ${emailData.email}`
    );
    
    window.open(`mailto:${ADMIN_EMAIL}?subject=${subject}&body=${body}`);
    return { success: true, method: 'mailto' };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        if (result.method === 'mailto') {
          setSubmitStatus('success-mailto');
        } else {
          setSubmitStatus('success');
          // Reset form on successful submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          });
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get in touch</h1>
          <p>We are here to assist you with any inquiries or support you may need. Feel free to reach out to us through the following channels:</p>
        </div>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <div>
            <label className="contact-label">First Name:</label>
            <input 
              type="text" 
              name="firstName"
              className={`contact-input ${errors.firstName ? 'error' : ''}`}
              placeholder="Enter your first name" 
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div>
            <label className="contact-label">Last Name:</label>
            <input 
              type="text" 
              name="lastName"
              className={`contact-input ${errors.lastName ? 'error' : ''}`}
              placeholder="Enter your last name" 
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          <div>
            <label className="contact-label">Email:</label>
            <input 
              type="email" 
              name="email"
              className={`contact-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email address" 
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div>
            <label className="contact-label">Message:</label>
            <textarea 
              name="message"
              className={`contact-textarea ${errors.message ? 'error' : ''}`}
              placeholder="Type your message here"
              value={formData.message}
              onChange={handleInputChange}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button 
            type="button" 
            className="contact-button"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'success-mailto' && (
            <div className="status-message success">
              📧 Your email client has been opened with the message. Please send it to complete your contact request.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
            </div>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default ContactForm;