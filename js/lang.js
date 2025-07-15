// Traduções PT/EN
const translations = {
  pt: {
    'nav.experiencia': 'Experiência',
    'nav.formacao': 'Formação',
    'nav.contato': 'Contato',
    'intro.titulo': 'Desenvolvedor<br>Mobile & BackEnd',
    'intro.local': 'Localizado em Maceió 🚀',
    'experiencia.titulo': 'Experiência',
    'experiencia.texto': 'Atuo como estagiário na área de Mobile e BackEnd na SSP-AL, e desenvolvo projetos com foco em tecnologias como <strong>React Native</strong>, <strong>Node.js</strong> e <strong>Flutter</strong>.',
    'formacao.titulo': 'Formação',
    'formacao.texto': 'Sou estudante de <strong>Bacharelado em Sistemas de Informação</strong> no <strong>Instituto Federal de Alagoas (IFAL)</strong>, com previsão de conclusão em 2026. Além disso, possuo uma formação intensiva na <strong>Cubos Academy</strong> focada em <strong>Desenvolvimento de Software - Backend</strong> e passei por um curso intensivo de <strong>JavaScript e Node.js</strong> com carga horária de 500 horas. Também participei de outros cursos em <strong>JavaScript, HTML e CSS</strong> pela <strong>Alura</strong> e <strong>Devmedia</strong>.',
    'footer.texto': 'Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋',
  },
  en: {
    'nav.experiencia': 'Experience',
    'nav.formacao': 'Education',
    'nav.contato': 'Contact',
    'intro.titulo': 'Developer<br>Mobile & BackEnd',
    'intro.local': 'Based in Maceió 🚀',
    'experiencia.titulo': 'Experience',
    'experiencia.texto': 'I work as an intern in Mobile and BackEnd at SSP-AL, and develop projects focused on technologies such as <strong>React Native</strong>, <strong>Node.js</strong> and <strong>Flutter</strong>.',
    'formacao.titulo': 'Education',
    'formacao.texto': 'I am a student of <strong>Bachelor in Information Systems</strong> at <strong>Instituto Federal de Alagoas (IFAL)</strong>, expected to graduate in 2026. I also have an intensive training at <strong>Cubos Academy</strong> focused on <strong>Software Development - Backend</strong> and completed an intensive <strong>JavaScript and Node.js</strong> course with 500 hours. I also took other courses in <strong>JavaScript, HTML and CSS</strong> at <strong>Alura</strong> and <strong>Devmedia</strong>.',
    'footer.texto': 'I am available for new projects at the moment. Contact me and let’s talk 👋',
  }
};

let currentLang = 'pt';
const langBtn = document.getElementById('lang-toggle');

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
}

langBtn.addEventListener('click', () => {
  setLang(currentLang === 'pt' ? 'en' : 'pt');
});

setLang(currentLang); 