const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const os = require('os');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

// Enhanced CORS configuration
app.use(cors({
  origin: true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Enhanced middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Create email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Enhanced health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    server: {
      port: PORT,
      host: HOST,
      nodeVersion: process.version,
      platform: process.platform
    },
    client: {
      ip: req.ip,
      userAgent: req.get('User-Agent')
    }
  });
});

// Test endpoint for mobile debugging
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'Mobile connection test successful',
    timestamp: new Date().toISOString(),
    requestInfo: {
      method: req.method,
      headers: req.headers,
      ip: req.ip,
      protocol: req.protocol,
      secure: req.secure
    }
  });
});

// Enrollment endpoint with enhanced error handling
app.post('/api/enrollment', async (req, res) => {
  try {
    console.log('Enrollment request received:', {
      body: req.body,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });

    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      course,
      address,
      city,
      zipCode,
      emergencyContact,
      emergencyPhone
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !dateOfBirth || !course || !address || !city || !zipCode) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields',
        missingFields: {
          firstName: !firstName,
          lastName: !lastName,
          email: !email,
          phone: !phone,
          dateOfBirth: !dateOfBirth,
          course: !course,
          address: !address,
          city: !city,
          zipCode: !zipCode
        }
      });
    }

    // Email content for you (the admin)
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px; text-align: center;">
          <h1>🎓 New Student Enrollment</h1>
          <p>A new student has submitted an enrollment application</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <h2>Student Information</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          <p><strong>Course:</strong> ${course}</p>
          
          <h3>Address</h3>
          <p><strong>Street:</strong> ${address}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>ZIP Code:</strong> ${zipCode}</p>
          
          ${emergencyContact || emergencyPhone ? `
            <h3>Emergency Contact</h3>
            ${emergencyContact ? `<p><strong>Name:</strong> ${emergencyContact}</p>` : ''}
            ${emergencyPhone ? `<p><strong>Phone:</strong> ${emergencyPhone}</p>` : ''}
          ` : ''}
          
          <p style="margin-top: 30px; color: #666;">
            <em>Application submitted on ${new Date().toLocaleString()}</em>
          </p>
        </div>
      </div>
    `;

    // Email content for the student
    const studentEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 30px; text-align: center;">
          <h1>🎓 Enrollment Confirmation</h1>
          <p>Thank you for your enrollment application!</p>
        </div>
        
        <div style="padding: 30px; background: #f8f9fa;">
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>We have successfully received your enrollment application for <strong>${course}</strong>.</p>
          
          <div style="background: #E0F2FE; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>What's Next?</h3>
            <ul>
              <li>Our admissions team will review your application</li>
              <li>You will receive an email within 2-3 business days</li>
              <li>If you have any questions, please reply to this email</li>
            </ul>
          </div>
          
          <p>We appreciate your interest in joining our academic community!</p>
          
          <p>Best regards,<br>The Admissions Team</p>
          
          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            <em>Application submitted on ${new Date().toLocaleString()}</em>
          </p>
        </div>
      </div>
    `;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'nguyagwamarkderrick@gmail.com',
      subject: `New Student Enrollment - ${firstName} ${lastName}`,
      html: adminEmailHtml,
      replyTo: email
    });

    // Send confirmation email to student
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Enrollment Application Received',
      html: studentEmailHtml
    });

    console.log('Enrollment processed successfully for:', email);

    res.json({
      success: true,
      message: 'Enrollment application submitted successfully!',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process enrollment. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found',
    path: req.originalUrl
  });
});

// Get network interfaces to display IP addresses
function getNetworkIPs() {
  const interfaces = os.networkInterfaces();
  const ips = [];
  
  Object.keys(interfaces).forEach(key => {
    interfaces[key].forEach(details => {
      if (details.family === 'IPv4' && !details.internal) {
        ips.push(details.address);
      }
    });
  });
  
  return ips;
}

// Start the server
app.listen(PORT, HOST, () => {
  const networkIPs = getNetworkIPs();
  
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
  console.log(`📱 Mobile access URLs:`);
  networkIPs.forEach(ip => {
    console.log(`   http://${ip}:${PORT}`);
  });
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
  console.log(`🔍 Test endpoint: http://[YOUR_IP]:${PORT}/api/test`);
});