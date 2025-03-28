// Este código deve ser copiado para o Google Apps Script vinculado à sua planilha do Google Sheets

function doPost(e) {
  try {
    // Parse the JSON data received from the form
    const data = JSON.parse(e.postData.contents);
    
    // Access the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Determina qual planilha usar baseado no tipo de formulário
    let sheet;
    if (data.formType === 'Artista Digital') {
      sheet = ss.getSheets()[0]; // Primeira aba para Artistas
    } else if (data.formType === 'Geek') {
      sheet = ss.getSheets()[1]; // Segunda aba para Geeks
    }
    
    // Se for a primeira submissão, cria os cabeçalhos apropriados
    if (sheet.getLastRow() === 0) {
      let headers;
      if (data.formType === 'Artista Digital') {
        headers = [
          'Nome',
          'Faixa Etária',
          'Gênero',
          'Área de Atuação',
          'Área - Outros',
          'Tempo Dedicado',
          'Publica Conteúdo',
          'Onde Publica',
          'Interesse em Webtoon',
          'Usa Marketplace',
          'Quais Marketplaces',
          'Interesse em NFT',
          'Comentários NFT',
          'Uso de IA',
          'Importância de Suporte',
          'Interesse em Colaboração',
          'Detalhes Colaboração',
          'Interesse em Agência',
          'Assinatura Mensal',
          'Valor Assinatura',
          'Desafio - Visibilidade',
          'Desafio - Monetização',
          'Desafio - Competição',
          'Desafio - Ferramentas',
          'Desafio - Outros',
          'Desafio - Outros Detalhes',
          'Recursos Desejados',
          'Comentários Adicionais',
          'Data de Submissão'
        ];
      } else if (data.formType === 'Geek') {
        headers = [
          'Nome',
          'Faixa Etária',
          'Gênero',
          'Interesses',
          'Outros Interesses',
          'Tempo Dedicado',
          'Uso de Plataformas',
          'Quais Plataformas',
          'Interesse em Nova Plataforma',
          'Compra Produtos',
          'Quais Produtos',
          'Interesse em NFT',
          'Comentários NFT',
          'Interesse em Assinatura',
          'Valor Assinatura',
          'Interesse em Interação',
          'Gosta - Variedade',
          'Gosta - Facilidade',
          'Gosta - Qualidade',
          'Gosta - Preço',
          'Gosta - Outros',
          'Gosta - Outros Detalhes',
          'Interesse em Merchandise',
          'Tipo de Merchandise',
          'Recursos Desejados',
          'Comentários Adicionais',
          'Data de Submissão'
        ];
      }
      sheet.appendRow(headers);
    }
    
    // Formata os dados baseado no tipo de formulário
    let formattedData;
    if (data.formType === 'Artista Digital') {
      formattedData = [
        data.name,
        data['artist-age'],
        data['artist-gender'],
        data['artist-area'],
        data['artist-area-other'] || 'N/A',
        data['artist-time'],
        data['artist-publish'],
        data['artist-publish-text'] || 'N/A',
        data['artist-webtoon-interest'],
        data['artist-marketplace'],
        data['artist-marketplace-text'] || 'N/A',
        data['artist-nft'],
        data['artist-nft-text'] || 'N/A',
        data['ai-assistant'],
        data['artist-support'],
        data['artist-collab'],
        data['artist-collab-text'] || 'N/A',
        data['artist-agency'],
        data['artist-subscription'],
        data['artist-subscription-text'] || 'N/A',
        data['artist-challenge-visibility'] || 'Não',
        data['artist-challenge-monetize'] || 'Não',
        data['artist-challenge-competition'] || 'Não',
        data['artist-challenge-tools'] || 'Não',
        data['artist-challenge-other'] || 'Não',
        data['artist-challenge-other-text'] || 'N/A',
        data['artist-features'],
        data['artist-comments'] || 'N/A',
        new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
      ];
    } else if (data.formType === 'Geek') {
      formattedData = [
        data.name,
        data['geek-age'],
        data['geek-gender'],
        Array.isArray(data['geek-interest-webtoons']) ? data['geek-interest-webtoons'].join(', ') : data['geek-interest-webtoons'],
        data['geek-interest-other-text'] || 'N/A',
        data['geek-time'],
        data['geek-platforms'],
        data['geek-platforms-text'] || 'N/A',
        data['geek-platform-interest'],
        data['geek-products'],
        data['geek-products-text'] || 'N/A',
        data['geek-nft'],
        data['geek-nft-text'] || 'N/A',
        data['geek-subscription'],
        data['geek-subscription-text'] || 'N/A',
        data['geek-interaction'],
        data['geek-like-variety'] || 'Não',
        data['geek-like-ease'] || 'Não',
        data['geek-like-quality'] || 'Não',
        data['geek-like-price'] || 'Não',
        data['geek-like-other'] || 'Não',
        data['geek-like-other-text'] || 'N/A',
        data['geek-merchandise'],
        data['geek-merchandise-text'] || 'N/A',
        data['artist-features'],
        data['artist-comments'] || 'N/A',
        new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
      ];
    }
    
    // Adiciona os dados à planilha
    sheet.appendRow(formattedData);
    
    // Retorna resposta de sucesso
    const result = {
      result: 'success',
      message: `Formulário ${data.formType} processado com sucesso`
    };
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
      
  } catch (error) {
    // Log do erro e retorno da resposta de erro
    console.error('Erro ao processar submissão do formulário:', error);
    const result = {
      result: 'error', 
      error: error.toString(),
      message: 'Falha ao processar o formulário'
    };
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader('Access-Control-Allow-Origin', '*');
  }
}

function handleArtistForm(data, ss) {
  const sheet = ss.getSheets()[0];
  
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Nome',
      'Faixa Etária',
      'Gênero',
      'Área de Atuação',
      'Área - Outros',
      'Tempo Dedicado',
      'Publica Conteúdo',
      'Onde Publica',
      'Interesse em Webtoon',
      'Usa Marketplace',
      'Quais Marketplaces',
      'Interesse em NFT',
      'Comentários NFT',
      'Uso de IA',
      'Importância de Suporte',
      'Interesse em Colaboração',
      'Detalhes Colaboração',
      'Interesse em Agência',
      'Assinatura Mensal',
      'Valor Assinatura',
      'Desafio - Visibilidade',
      'Desafio - Monetização',
      'Desafio - Competição',
      'Desafio - Ferramentas',
      'Desafio - Outros',
      'Desafio - Outros Detalhes',
      'Recursos Desejados',
      'Comentários Adicionais',
      'Data de Submissão'
    ];
    sheet.appendRow(headers);
  }

  const formattedData = [
    data.name,
    data['artist-age'],
    data['artist-gender'],
    data['artist-area'],
    data['artist-area-other'] || 'N/A',
    data['artist-time'],
    data['artist-publish'],
    data['artist-publish-text'] || 'N/A',
    data['artist-webtoon-interest'],
    data['artist-marketplace'],
    data['artist-marketplace-text'] || 'N/A',
    data['artist-nft'],
    data['artist-nft-text'] || 'N/A',
    data['ai-assistant'],
    data['artist-support'],
    data['artist-collab'],
    data['artist-collab-text'] || 'N/A',
    data['artist-agency'],
    data['artist-subscription'],
    data['artist-subscription-text'] || 'N/A',
    data['artist-challenge-visibility'] || 'Não',
    data['artist-challenge-monetize'] || 'Não',
    data['artist-challenge-competition'] || 'Não',
    data['artist-challenge-tools'] || 'Não',
    data['artist-challenge-other'] || 'Não',
    data['artist-challenge-other-text'] || 'N/A',
    data['artist-features'],
    data['artist-comments'] || 'N/A',
    new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  ];
  
  sheet.appendRow(formattedData);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função para testar o formulário de artista
function testArtistForm() {
  const testData = {
    formType: 'Artista Digital',
    name: 'Maria Silva',
    'artist-age': '25-34',
    'artist-gender': 'Feminino',
    'artist-area': 'Escrita',
    'artist-area-other': '',
    'artist-time': 'Menos de 5h',
    'artist-publish': 'Não',
    'artist-publish-text': '',
    'artist-webtoon-interest': 'Muito',
    'artist-marketplace': 'Sim',
    'artist-marketplace-text': '',
    'artist-nft': 'Muito interesante',
    'artist-nft-text': '',
    'ai-assistant': 'Sim',
    'artist-support': 'Importante',
    'artist-collab': 'Sim',
    'artist-collab-text': '',
    'artist-agency': 'Útil',
    'artist-subscription': 'Sim',
    'artist-subscription-text': '50',
    'artist-challenge-visibility': "true",
    'artist-challenge-monetize': "true",
    'artist-challenge-competition': "true",
    'artist-challenge-tools': "true",
    'artist-challenge-other': "true",
    'artist-challenge-other-text': "Tempo",
    'artist-features': 'Controle de ganhos',
    'artist-comments': 'Apenas isso'
  };
  
  const e = { postData: { contents: JSON.stringify(testData) } };
  const result = doPost(e);
  Logger.log(result.getContent());
}

function handleGeekForm(data, ss) {
  const sheet = ss.getSheets()[1]; // Usa a segunda aba para respostas Geek
  
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Nome',
      'Faixa Etária',
      'Gênero',
      'Interesses',
      'Outros Interesses',
      'Tempo Dedicado',
      'Uso de Plataformas',
      'Quais Plataformas',
      'Interesse em Nova Plataforma',
      'Compra Produtos',
      'Quais Produtos',
      'Interesse em NFT',
      'Comentários NFT',
      'Interesse em Assinatura',
      'Valor Assinatura',
      'Interesse em Interação',
      'Gosta - Variedade',
      'Gosta - Facilidade',
      'Gosta - Qualidade',
      'Gosta - Preço',
      'Gosta - Outros',
      'Gosta - Outros Detalhes',
      'Interesse em Merchandise',
      'Tipo de Merchandise',
      'Recursos Desejados',
      'Comentários Adicionais',
      'Data de Submissão'
    ];
    sheet.appendRow(headers);
  }

  const formattedData = [
    data.name,
    data['geek-age'],
    data['geek-gender'],
    Array.isArray(data['geek-interest-webtoons']) ? data['geek-interest-webtoons'].join(', ') : data['geek-interest-webtoons'],
    data['geek-interest-other-text'] || 'N/A',
    data['geek-time'],
    data['geek-platforms'],
    data['geek-platforms-text'] || 'N/A',
    data['geek-platform-interest'],
    data['geek-products'],
    data['geek-products-text'] || 'N/A',
    data['geek-nft'],
    data['geek-nft-text'] || 'N/A',
    data['geek-subscription'],
    data['geek-subscription-text'] || 'N/A',
    data['geek-interaction'],
    data['geek-like-variety'] || 'Não',
    data['geek-like-ease'] || 'Não',
    data['geek-like-quality'] || 'Não',
    data['geek-like-price'] || 'Não',
    data['geek-like-other'] || 'Não',
    data['geek-like-other-text'] || 'N/A',
    data['geek-merchandise'],
    data['geek-merchandise-text'] || 'N/A',
    data['artist-features'],
    data['artist-comments'] || 'N/A',
    new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  ];
  
  sheet.appendRow(formattedData);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Função para testar o formulário geek
function testGeekForm() {
  const testData = {
    formType: 'Geek',
    name: 'Maria Silva',
    'geek-age': '25-34',
    'geek-gender': 'Feminino',
    'geek-interest-webtoons': ['Ler webtoons', 'Ler web novels', 'Comprar produtos personalizados', 'Outros'],
    'geek-interest-other-text': 'Mangá',
    'geek-time': 'Menos de 5h',
    'geek-platforms': 'Não',
    'geek-platforms-text': '',
    'geek-platform-interest': 'Muito',
    'geek-products': 'Sim',
    'geek-products-text': '',
    'geek-nft': 'Muito interesante',
    'geek-nft-text': '',
    'geek-subscription': 'Sim',
    'geek-subscription-text': '10',
    'geek-interaction': 'Muito',
    'geek-like-variety': "true",
    'geek-like-ease': "true",
    'geek-like-quality': "true",
    'geek-like-price': "true",
    'geek-like-other': "true",
    'geek-like-other-text': "Game",
    'geek-merchandise': 'Sim',
    'geek-merchandise-text': 'Camisas',
    'artist-features': 'Jogos',
    'artist-comments': 'Apenas isso'
  };
  
  const e = { postData: { contents: JSON.stringify(testData) } };
  const result = doPost(e);
  Logger.log(result.getContent());
}

// Teste do formulário de artista
testSubmission(FORM_TYPES.ARTIST);

// Teste do formulário geek
testSubmission(FORM_TYPES.GEEK);

// Exemplo de como enviar dados do frontend
async function submitForm(formData) {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxrPbwYQJPsfMUE6uNUeA3y6JIFOf77iPpx77PTWz_vVCjUDILsFKxb3rG-Tn--CIub/exec', {
      method: 'POST',
      body: JSON.stringify({
        formType: 'Artista Digital', // ou 'Geek'
        ...formData
      })
    });
    
    const result = await response.json();
    if (result.result === 'success') {
      alert('Formulário enviado com sucesso!');
    } else {
      throw new Error(result.error);
    }
  } catch (error) {
    alert('Erro ao enviar formulário: ' + error.message);
  }
}

// Adicione este código temporariamente para debug
async function testConnection() {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: JSON.stringify({
                formType: 'Artista Digital',
                test: 'test'
            })
        });
        const result = await response.json();
        console.log('Teste de conexão:', result);
    } catch (error) {
        console.error('Erro no teste:', error);
    }
}
