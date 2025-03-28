const { google } = require('googleapis');

async function setupSheets(auth) {
  const sheets = google.sheets({ version: 'v4', auth });
  
  // Criar nova planilha
  const spreadsheet = await sheets.spreadsheets.create({
    requestBody: {
      properties: {
        title: 'Respostas Pesquisa WebToons',
      },
      sheets: [
        {
          properties: {
            title: 'Respostas Artistas',
          },
          data: [{
            rowData: [{
              values: [
                { userEnteredValue: { stringValue: 'Timestamp' } },
                { userEnteredValue: { stringValue: 'Faixa Etária' } },
                { userEnteredValue: { stringValue: 'Gênero' } },
                { userEnteredValue: { stringValue: 'Área de Atuação' } },
                // ... outros cabeçalhos
              ]
            }]
          }]
        },
        {
          properties: {
            title: 'Respostas Geeks',
          },
          data: [{
            rowData: [{
              values: [
                { userEnteredValue: { stringValue: 'Timestamp' } },
                { userEnteredValue: { stringValue: 'Faixa Etária' } },
                { userEnteredValue: { stringValue: 'Gênero' } },
                { userEnteredValue: { stringValue: 'Interesse Principal' } },
                // ... outros cabeçalhos
              ]
            }]
          }]
        }
      ]
    }
  });

  return spreadsheet.data.spreadsheetId;
} 