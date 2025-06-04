document.getElementById('registration-form').addEventListener('submit', function(e) {
  // If validation fails, prevent the default form submission
  if (!validateForm()) {
    e.preventDefault();
  }
  // If validation passes, we do nothing here—letting the browser submit the form naturally.
});

function validateForm() {
  let isValid = true;

  // Validate First Name
  const firstName = document.getElementById('first-name').value.trim();
  const firstNameError = document.getElementById('first-name-error');
  if (!firstName || !/^[a-zA-Z]{2,}$/.test(firstName)) {
    firstNameError.textContent = 'First name must be at least 2 letters (alphabets only).';
    isValid = false;
  } else {
    firstNameError.textContent = '';
  }

  // Validate Middle Name (if provided)
  const middleName = document.getElementById('middle-name').value.trim();
  const middleNameError = document.getElementById('middle-name-error');
  if (middleName && !/^[a-zA-Z]{2,}$/.test(middleName)) {
    middleNameError.textContent = 'Middle name must be at least 2 letters (alphabets only).';
    isValid = false;
  } else {
    middleNameError.textContent = '';
  }

  // Validate Last Name
  const lastName = document.getElementById('last-name').value.trim();
  const lastNameError = document.getElementById('last-name-error');
  if (!lastName || !/^[a-zA-Z]{2,}$/.test(lastName)) {
    lastNameError.textContent = 'Last name must be at least 2 letters (alphabets only).';
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  // Validate Email Address
  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('email-error');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Validate ID Proof Selection
  const idProof = document.getElementById('id-proof').value;
  const idProofError = document.getElementById('id-proof-error');
  if (!idProof) {
    idProofError.textContent = 'Please select an ID proof.';
    isValid = false;
  } else {
    idProofError.textContent = '';
  }

  // Validate Date of Birth
  const dob = document.getElementById('dob').value;
  const dobError = document.getElementById('dob-error');
  const today = new Date();
  const birthDate = new Date(dob);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (!dob) {
    dobError.textContent = 'Please select your date of birth.';
    isValid = false;
  } else if (birthDate > today || (age < 18 || (age === 18 && monthDiff < 0))) {
    dobError.textContent = 'You must be at least 18 years old.';
    isValid = false;
  } else {
    dobError.textContent = '';
  }

  // Validate Number of Members Accompanying
  const members = document.getElementById('members').value;
  const membersError = document.getElementById('members-error');
  if (members === '' || members < 0) {
    membersError.textContent = 'Please enter a valid number (0 or more).';
    isValid = false;
  } else {
    membersError.textContent = '';
  }

  return isValid;
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
});