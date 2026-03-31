import { categories, profileCategories } from './data.js';
import { createCarousel } from './components/Carousel.js';

// Theme Toggle
function initializeTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
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
  
  setTheme(savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initializeTheme();
    
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        const nomePerfil = localStorage.getItem('perfilAtivoNome') || 'Henrique';
        const userCategories = profileCategories[nomePerfil] || categories;
        userCategories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
