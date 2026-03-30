const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light');
    themeToggleButton.textContent = '🌙';
    themeToggleButton.setAttribute('aria-label', 'Alternar para modo escuro');
  } else {
    body.classList.remove('light');
    themeToggleButton.textContent = '☀️';
    themeToggleButton.setAttribute('aria-label', 'Alternar para modo claro');
  }
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
applyTheme(initialTheme);

themeToggleButton.addEventListener('click', () => {
  const nextTheme = body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(nextTheme);
});

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
