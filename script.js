function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
      if (el.dataset.lang === lang) {
        if (el.tagName === "A" || el.tagName === "SPAN" || el.tagName === "BUTTON") {
          el.style.display = "inline-block";
        } else {
          el.style.display = "block";
        }
      } else {
        el.style.display = "none";
      }
    });
  }
  function toggleTheme() {
    const body = document.body;
    const toggleTargets = document.querySelectorAll('header, .cta-btn, .feature, .flashcard');
  
    body.classList.toggle('dark-mode');
  
    toggleTargets.forEach(el => {
      el.classList.toggle('dark-mode');
    });
  
    // Save theme to localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  }
  
  // Load saved theme on page load
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      toggleTheme();
    }
  };
  function toggleLesson(button) {
    const card = button.parentElement;
    card.classList.toggle("active");
  
    const isOpen = card.classList.contains("active");
    button.textContent = (isOpen ? "▼" : "▶️") + " " + button.textContent.slice(2).trim();
  }
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    updateLanguageDisplay(savedLang);
  });
  