document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    feedback.textContent = '';
    feedback.className = '';

    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        feedback.textContent = 'Mensagem enviada com sucesso!';
        feedback.className = 'success';
        form.reset();
      } else {
        feedback.textContent = 'Erro no envio. Tente novamente!';
        feedback.className = 'error';
      }
    } catch (err) {
      feedback.textContent = 'Erro de conexão. Tente novamente!';
      feedback.className = 'error';
    }
  });
}); 