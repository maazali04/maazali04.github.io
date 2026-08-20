// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Scroll reveal ----------
const revealTargets = document.querySelectorAll(
  '.bracket-card, .feature-card, .package-strip, .about__grid, .connect__grid'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => io.observe(el));

// ---------- Hero role typing ----------
const roles = [
  'AI Student',
  'Computer Vision',
  'Efficient AI',
  'C++ & Python Developer'
];
const roleEl = document.getElementById('typedRole');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!roleEl) return;
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    roleEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
if (roleEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  typeLoop();
} else if (roleEl) {
  roleEl.textContent = roles[0];
}

// ---------- Footer year ----------
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
