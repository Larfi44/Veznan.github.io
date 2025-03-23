const body = document.body;
const theme = document.getElementById('theme');

function toggleTheme() {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  }
  
  theme.addEventListener('click', toggleTheme);