const body = document.body;

function toggleTheme() {
  body.classList.toggle('light');
  body.classList.toggle('dark');
  }
  
  document.getElementById('theme').addEventListener('click', toggleTheme);