// Animação ao rolar (scroll reveal)
const revealEls = document.querySelectorAll('.fade-in, .slide-up, .scale-in');
const revealOptions = { threshold: 0.1 };

const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.visibility = 'visible';
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, revealOptions);

revealEls.forEach(el => {
  el.style.visibility = 'hidden';
  observer.observe(el);
}); 