# Nome do Projeto

Uma breve descrição do que é seu projeto e qual problema ele resolve.

## 🚀 Funcionalidades

- Funcionalidade 1
- Funcionalidade 2
- Funcionalidade 3

## 📋 Pré-requisitos

Liste o que é necessário para instalar o software e como instalá-lo.

```bash
npm install
# ou
yarn install
```

## 🔧 Instalação

Um passo a passo de como configurar o ambiente de desenvolvimento:

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Entre no diretório
```bash
cd seu-repositorio
```

3. Instale as dependências
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## 🛠️ Construído com

* [Tecnologia 1]() - Descrição
* [Tecnologia 2]() - Descrição
* [Tecnologia 3]() - Descrição

## 📌 Versão

Versão 1.0.0

## ✒️ Autores

* **Seu Nome** - *Trabalho Inicial* - [seu-usuario](https://github.com/seu-usuario)

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](LICENSE.md) para detalhes.

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺 
* Um agradecimento publicamente 🫂
* etc.

## 📊 Conectando com Google Sheets

### Pré-requisitos

1. Ter uma conta Google
2. Criar um projeto no Google Cloud Console
3. Habilitar a API do Google Sheets
4. Criar credenciais de acesso

### Passo a Passo

#### 1. Configuração no Google Cloud Console

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. No menu lateral, vá para "APIs e Serviços" > "APIs e serviços ativados"
4. Clique em "+ ATIVAR APIS E SERVIÇOS"
5. Procure por "Google Sheets API" e ative-a

#### 2. Criar Credenciais

1. No menu lateral, vá para "APIs e Serviços" > "Credenciais"
2. Clique em "CRIAR CREDENCIAIS" e selecione "Conta de serviço"
3. Preencha as informações necessárias e clique em "Criar"
4. Faça o download do arquivo JSON com as credenciais

#### 3. Instalação das Dependências

```bash
npm install googleapis @google-cloud/local-auth
# ou
yarn add googleapis @google-cloud/local-auth
```

#### 4. Configuração no Projeto

1. Crie uma pasta `config` na raiz do projeto
2. Mova o arquivo JSON de credenciais para esta pasta
3. Crie um arquivo `.env` na raiz do projeto:

```env
GOOGLE_SHEETS_PRIVATE_KEY="sua_chave_privada"
GOOGLE_SHEETS_CLIENT_EMAIL="seu_email_cliente"
GOOGLE_SHEETS_SPREADSHEET_ID="id_da_sua_planilha"
```

#### 5. Exemplo de Código de Integração

```typescript
import { google } from 'googleapis';

async function getGoogleSheetClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Exemplo de função para ler dados
async function readSheetData(range: string) {
  const sheets = await getGoogleSheetClient();
  
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: range,
  });

  return response.data.values;
}

// Exemplo de função para escrever dados
async function writeSheetData(range: string, values: any[][]) {
  const sheets = await getGoogleSheetClient();

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    range: range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: values,
    },
  });
}
```

### Uso

```typescript
// Exemplo de leitura
const data = await readSheetData('Sheet1!A1:D10');

// Exemplo de escrita
await writeSheetData('Sheet1!A1', [['Nome', 'Idade'], ['João', '25']]);
```

### Dicas Importantes

1. **Segurança**:
   - Nunca compartilhe suas credenciais
   - Adicione o arquivo de credenciais ao .gitignore
   - Use variáveis de ambiente para informações sensíveis

2. **Permissões**:
   - Compartilhe sua planilha com o email da conta de serviço
   - Configure as permissões adequadas (visualizar/editar)

3. **Limites de API**:
   - Fique atento aos [limites da API do Google Sheets](https://developers.google.com/sheets/api/limits)
   - Implemente cache quando necessário
   - Considere usar lotes (batch requests) para múltiplas operações

### Solução de Problemas

Se você encontrar erros comuns:

1. **Erro de Autenticação**:
   - Verifique se as credenciais estão corretas
   - Confirme se a API está ativada
   - Verifique se a planilha foi compartilhada com a conta de serviço

2. **Erro de Permissão**:
   - Verifique as permissões da conta de serviço
   - Confirme se o ID da planilha está correto

3. **Erro de Formato**:
   - Verifique se o range está no formato correto (ex: 'Sheet1!A1:D10')
   - Confirme se os dados estão no formato esperado pela API

### Recursos Adicionais

- [Documentação oficial da API do Google Sheets](https://developers.google.com/sheets/api)
- [Guia de Início Rápido](https://developers.google.com/sheets/api/quickstart/nodejs)
- [Referência da API](https://developers.google.com/sheets/api/reference/rest)

---
⌨️ com ❤️ por [seu-nome](https://github.com/seu-usuario) 😊 # Fomulario-de-pesquisa-Ink
