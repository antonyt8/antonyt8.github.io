<script>
  // Ouvinte de evento para o envio do formulário
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const form = event.target;
    const data = new FormData(form);

    // Envia os dados do formulário para o EmailJS usando o Service ID e Template ID
    emailjs.sendForm('service_krffkw5', 'seu_template_id', data)
      .then(function(response) {
        console.log('Mensagem enviada com sucesso:', response);
        alert('Mensagem enviada com sucesso!');
        form.reset(); // Limpa o formulário após o envio
      })
      .catch(function(error) {
        console.error('Erro ao enviar a mensagem:', error);
        alert('Ocorreu um erro. Tente novamente!');
      });
  });
</script>
