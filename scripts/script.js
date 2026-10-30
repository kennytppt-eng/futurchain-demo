// Simple JavaScript used for first-year level form validation and search feedback
function showMessage(id, text) {
  document.getElementById(id).textContent = text;
}

function validateLogin(event) {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  if (email === '' || password === '') {
    showMessage('loginMessage', 'Please fill in both the email and password fields.');
  } else {
    showMessage('loginMessage', 'Login form checked successfully. This is a prototype, so no real login is created.');
  }
}

function validateContact(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name === '' || email === '' || message === '') {
    showMessage('contactMessage', 'Please complete your name, email and message before sending.');
  } else {
    showMessage('contactMessage', 'Thank you. Your message has been checked and would be sent in a real website.');
  }
}

function siteSearch(event) {
  event.preventDefault();
  const searchInput = event.target.querySelector('input').value.trim();
  if (searchInput === '') {
    alert('Please type a search word first.');
  } else {
    alert('Prototype search: you searched for "' + searchInput + '".');
  }
}
