// Scroll progress
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById('scroll-progress').style.width = `${scrolled}%`;
});

// Reveal sections on scroll
const sections = document.querySelectorAll('.section');
const revealSections = () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) sec.classList.add('visible');
  });
};
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Animate titles on load
window.addEventListener('load', () => {
  document.querySelectorAll('.animate-title').forEach(el => {
    el.style.animationDelay = `${Math.random()}s`;
    el.classList.add('visible');
  });
});

// Navbar background toggle
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

