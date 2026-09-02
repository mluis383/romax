// Arquivo: js/main.js

document.addEventListener("DOMContentLoaded", function () {
  
  // ==========================================
  // INTEGRACAO COMPLETA DO FORMULARIO WHATSAPP
  // ==========================================
  const whatsappForm = document.getElementById("whatsapp-form");

  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o envio tradicional / recarregamento

      // Número da Romax que RECEBERÁ os contatos (55 + DDD + Número)
      const numeroDestino = "5511949887154";

      // Captura e sanitiza os campos do formulário
      const nome = document.getElementById("nome") ? document.getElementById("nome").value.trim() : "";
      const email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
      const telefone = document.getElementById("telefone") ? document.getElementById("telefone").value.trim() : "";
      const ajuda = document.getElementById("ajuda") ? document.getElementById("ajuda").value.trim() : "";
      const mensagem = document.getElementById("mensagem") ? document.getElementById("mensagem").value.trim() : "";

      // Validação básica de campos obrigatórios
      if (!nome || !email || !telefone) {
        alert("Por favor, preencha os campos obrigatórios (Nome, E-mail e Telefone).");
        return;
      }

      // Monta a mensagem formatada para o suporte/atendimento no WhatsApp
      const textoMensagem = 
`*Novo contato pelo site — Romax Contabilidade*

👤 *Nome/Empresa:* ${nome}
✉️ *E-mail:* ${email}
📱 *Telefone/WhatsApp:* ${telefone}
🎯 *Como a Romax pode ajudar:* ${ajuda || "Não especificado"}
💬 *Mensagem adicional:* ${mensagem || "Nenhuma mensagem extra"}`;

      // Aplica o encodeURIComponent para garantir formatação correta dos caracteres e quebras de linha na URL
      const textoEncoded = encodeURIComponent(textoMensagem);

      // Gera a URL oficial da API do WhatsApp
      const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${textoEncoded}`;

      // Abre em uma nova guia/aplicativo do WhatsApp
      window.open(urlWhatsApp, "_blank");
    });
  }

  // Accordion de Serviços
  const servicoItems = document.querySelectorAll(".servico-item");
  servicoItems.forEach(item => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      servicoItems.forEach(i => i.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

});
