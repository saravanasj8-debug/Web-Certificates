// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark mode toggle
const toggleBtn = document.getElementById('toggleBtn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode')
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Typing effect
const text = "Hi, I'm saravanakumar";
let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.querySelector(".typing").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;