const { google } = require('googleapis');

class SheetsService {
  constructor(credentials) {
    this.auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });
    this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    this.spreadsheetId = process.env.SPREADSHEET_ID; // Adicione o ID da sua planilha
  }

  async appendResponse(data, isArtist) {
    const timestamp = new Date().toISOString();
    const range = isArtist ? 'Respostas Artistas' : 'Respostas Geeks';
    
    const values = [
      [
        timestamp,
        ...this.formatResponseData(data, isArtist)
      ]
    ];

    try {
      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range,
        valueInputOption: 'RAW',
        requestBody: { values }
      });
      return true;
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      return false;
    }
  }

  formatResponseData(data, isArtist) {
    if (isArtist) {
      return [
        data.faixaEtaria,
        data.genero,
        data.areaAtuacao,
        data.tempoSemanal,
        data.publicaVende,
        data.interesseWebtoons,
        data.marketplace,
        data.nft,
        data.programaApoio,
        data.colaboracao,
        data.agenciamento,
        data.assinatura,
        data.desafios,
        data.funcionalidades,
        data.comentarios
      ];
    }

    return [
      data.faixaEtaria,
      data.genero,
      data.interessePrincipal,
      data.horasSemana,
      data.usaPlataformas,
      data.interesseWebtoons,
      data.produtosPersonalizados,
      data.nft,
      data.assinatura,
      data.interacaoArtistas,
      data.preferenciasPlataforma,
      data.merchandise,
      data.conteudoDesejado,
      data.sugestoes
    ];
  }
}

module.exports = SheetsService; 