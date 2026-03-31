
// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Load saved theme preference or default to dark mode
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
}

// Set theme function
function setTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Initialize theme on page load
initializeTheme();

// Profile selection
const profileButtons = document.querySelectorAll('.profile');
profileButtons.forEach(button => {
  const profileNameElement = button.querySelector('span');
  const profileImageElement = button.querySelector('img');
  if (!profileNameElement || !profileImageElement) return;

  const profileName = profileNameElement.textContent.trim();
  const profileImage = profileImageElement.src;

  button.addEventListener('click', () => {
    localStorage.setItem('perfilAtivoNome', profileName);
    localStorage.setItem('perfilAtivoImagem', profileImage);
    window.location.href = 'catalogo/catalogo.html';
  });
});
