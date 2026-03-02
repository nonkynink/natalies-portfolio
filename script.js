
// scroll effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// contact form validation and submission
function checkEmails(email, confirmEmail) {
  return email === confirmEmail;
}

// checks date is at least 1 day in the future
function checkDate(projectDate) {
  const today = new Date();
  const selectedDate = new Date(projectDate);
  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0);
  
  const daysDifference = (selectedDate - today) / (1000 * 60 * 60 * 24);
  return daysDifference >= 1;
}

// validate form and show confirmation message
function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const email = document.getElementById("email").value.trim();
  const confirmEmail = document.getElementById("confirmEmail").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const description = document.getElementById("description").value.trim();
  const projectDate = document.getElementById("projectDate").value;
  const duration = document.getElementById("duration").value;
  const contactMethod = document.getElementById("contactMethod").value;

  // Check if emails match
  if (!checkEmails(email, confirmEmail)) {
    alert("Email and Confirm Email do not match.");
    return false;
  }

  // Check if project date is at least 1 day in the future
  if (!checkDate(projectDate)) {
    alert("Please select a project date at least 1 day in the future.");
    return false;
  }

  // confirmation message
  const summary = `Project Summary:
Name: ${firstName}
Email: ${email}
Phone: ${phone}
Description: ${description}
Project Date: ${projectDate}
Duration: ${duration} days
Preferred Contact Method: ${contactMethod}
To: [email]
`;

  if (confirm(summary)) {
    console.log("Form data:", {
      firstName, email, phone, description, projectDate, duration, contactMethod
    });
    alert("Form submitted! No email will be sent.");
    document.getElementById("contactForm").reset();
    return true;
  }
  
  return false;
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});
