// Auto-detect the server URL
const API_BASE_URL = `http://${window.location.hostname}:${window.location.port || 3001}`;

// Alternative: If you know your IP, you can hardcode it
// const API_BASE_URL = 'http://192.168.1.100:3001'; // Replace with your actual IP

// Form submission function
async function submitEnrollment(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/enrollment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting enrollment:', error);
    return {
      success: false,
      message: 'Failed to connect to server. Please check your connection and try again.'
    };
  }
}

// Health check function
async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
}

// Show connection status
async function showConnectionStatus() {
  const statusElement = document.getElementById('connection-status');
  if (!statusElement) return;

  const isHealthy = await checkServerHealth();
  if (isHealthy) {
    statusElement.innerHTML = '<span style="color: green;">✅ Connected to server</span>';
    statusElement.style.display = 'block';
  } else {
    statusElement.innerHTML = '<span style="color: red;">❌ Failed to connect to server</span>';
    statusElement.style.display = 'block';
  }
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', () => {
  showConnectionStatus();
  
  // Add connection status element if it doesn't exist
  if (!document.getElementById('connection-status')) {
    const statusDiv = document.createElement('div');
    statusDiv.id = 'connection-status';
    statusDiv.style.textAlign = 'center';
    statusDiv.style.padding = '10px';
    statusDiv.style.margin = '10px 0';
    document.body.insertBefore(statusDiv, document.body.firstChild);
  }
});

// Example form submission (adjust based on your actual form)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enrollmentForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Get form data - adjust field names based on your actual form
      const formData = {
        firstName: document.getElementById('firstName')?.value || '',
        lastName: document.getElementById('lastName')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        idnumber: document.getElementById('idnumber')?.value || '',
        dateOfBirth: document.getElementById('dateOfBirth')?.value || '',
        course: document.getElementById('course')?.value || '',
        address: document.getElementById('address')?.value || '',
        city: document.getElementById('city')?.value || '',
        zipCode: document.getElementById('zipCode')?.value || '',
        emergencyContact: document.getElementById('emergencyContact')?.value || '',
        emergencyPhone: document.getElementById('emergencyPhone')?.value || ''
      };

      // Show loading state
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Submitting...';
      submitButton.disabled = true;

      // Submit enrollment
      const result = await submitEnrollment(formData);
      
      // Reset button
      submitButton.textContent = originalText;
      submitButton.disabled = false;

      // Show result
      if (result.success) {
        alert('✅ Enrollment submitted successfully! Check your email for confirmation.');
        form.reset();
      } else {
        alert(`❌ ${result.message || 'Submission failed. Please try again.'}`);
      }
    });
  }
});