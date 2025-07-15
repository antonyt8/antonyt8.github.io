# Portfólio Antony Thiago

## Configuração do Formulário de Contato

O formulário usa [EmailJS](https://www.emailjs.com/) para envio de mensagens. Para funcionar, crie uma conta gratuita, configure um serviço e template, e substitua os valores em `js/form.js`:

- `service_krffkw5` → seu Service ID
- `template_krffkw5` → seu Template ID

No painel do EmailJS, adicione os campos `from_name`, `from_email` e `message` ao template.

No HTML, mantenha o script CDN do EmailJS:
```html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
```

Se quiser usar outro serviço (Formspree, Netlify Forms), adapte o script em `js/form.js`. 