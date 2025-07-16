// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const verseEl = document.getElementById('verse');

  // Check for saved theme in localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
  }

  // Toggle dark/light mode
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggleBtn.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  });

  // Sample Bible verses array
  const verses = [
    "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope. – Jeremiah 29:11",
    "I can do all things through him who strengthens me. – Philippians 4:13",
    "Your word is a lamp to my feet and a light to my path. – Psalm 119:105",
    "Trust in the LORD with all your heart, and do not lean on your own understanding. – Proverbs 3:5",
    "Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go. – Joshua 1:9"
  ];

  // Pick a random verse and display it
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];
  verseEl.textContent = randomVerse;
});
