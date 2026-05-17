// Fade-in sections on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Shrink nav padding on scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 60;
  nav.style.padding = scrolled ? '14px 60px' : '20px 60px';
});
