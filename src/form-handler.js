const SheetsService = require('./sheets-service');
const credentials = require('./path-to-your-credentials.json');

const sheetsService = new SheetsService(credentials);

async function handleFormSubmission(formData, isArtist) {
  try {
    const success = await sheetsService.appendResponse(formData, isArtist);
    if (success) {
      // Mostrar mensagem de sucesso
      alert('Respostas enviadas com sucesso!');
    } else {
      // Mostrar mensagem de erro
      alert('Ocorreu um erro ao enviar as respostas. Por favor, tente novamente.');
    }
  } catch (error) {
    console.error('Erro ao processar envio:', error);
    alert('Ocorreu um erro ao enviar as respostas. Por favor, tente novamente.');
  }
}

// Adicione este evento ao botão "Concluir"
document.getElementById('btnConcluir').addEventListener('click', async () => {
  const formData = collectFormData(); // Função que você já deve ter para coletar os dados do formulário
  const isArtist = checkIfArtist(); // Função para verificar se é artista ou geek
  await handleFormSubmission(formData, isArtist);
}); 