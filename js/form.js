// Formulário funcional com EmailJS
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('input', (e) => {
  if (e.target.name === 'email') {
    if (!validateEmail(e.target.value)) {
      feedback.textContent = 'E-mail inválido';
      feedback.className = 'error';
    } else {
      feedback.textContent = '';
      feedback.className = '';
    }
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  feedback.textContent = '';
  feedback.className = '';

  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  if (!name || !email || !message) {
    feedback.textContent = 'Preencha todos os campos.';
    feedback.className = 'error';
    return;
  }
  if (!validateEmail(email)) {
    feedback.textContent = 'E-mail inválido';
    feedback.className = 'error';
    return;
  }

  feedback.textContent = 'Enviando...';
  feedback.className = '';

  // EmailJS
  emailjs.send('service_krffkw5', 'template_krffkw5', {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(function(response) {
    feedback.textContent = 'Mensagem enviada com sucesso!';
    feedback.className = 'success';
    form.reset();
  }, function(error) {
    feedback.textContent = 'Erro no envio. Tente novamente!';
    feedback.className = 'error';
  });
}); 