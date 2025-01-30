// Tema Dark/Light
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () => {
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  themeToggle.innerHTML = newTheme === 'dark' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});

// Filtro de Projetos
document.querySelectorAll('[data-filtro]').forEach(button => {
  button.addEventListener('click', () => {
    const filtro = button.dataset.filtro;
    document.querySelectorAll('.filtros-projetos button').forEach(btn => 
      btn.classList.remove('filtro-ativo'));
    button.classList.add('filtro-ativo');

    document.querySelectorAll('.projeto-card').forEach(card => {
      card.style.display = (filtro === 'todos' || card.dataset.categoria === filtro) 
        ? 'block' 
        : 'none';
    });
  });
});

// Animações ao Scroll
const animeElements = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 0.85);
  animeElements.forEach(element => {
    if(windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    }
  });
}

window.addEventListener('scroll', () => {
  animeScroll();
  updateScrollProgress();
});

// Progresso do Scroll
function updateScrollProgress() {
  const progress = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.querySelector('.scroll-progress').style.width = `${progress}%`;
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Inicializações
animeScroll();
updateScrollProgress();

// EmailJS 
/*
emailjs.init("SEU_USER_ID");
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
    .then(() => alert('Mensagem enviada!'))
    .catch(() => alert('Erro ao enviar!'));
});
*/