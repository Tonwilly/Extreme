// Search toggle
const searchToggle = document.getElementById('searchToggle');
const closeSearch = document.getElementById('closeSearch');
const searchBox = document.getElementById('searchBox');

searchToggle.addEventListener('click', () => {
  searchBox.classList.remove('hidden');
});
closeSearch.addEventListener('click', () => {
  searchBox.classList.add('hidden');
});

// Current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  const email = emailInput.value.trim();
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
    emailInput.value = '';
  }
});
// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
// Search toggle

searchToggle.addEventListener('click', () => {
  searchBox.classList.remove('hidden');
});
closeSearch.addEventListener('click', () => {
  searchBox.classList.add('hidden');
});

// Current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Newsletter form submission
/*
const newsletterForm = document.getElementsByClassName('newsletter');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('newsletter-email');
  const email = emailInput.value.trim();
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
    emailInput.value = '';
  }
});
// Mobile menu toggle*/

