# Estoque de Casa
*Aplicação para controlar os itens da despensa da sua casa / Pantry management application for your home.*

## Funcionalidades / Features
- (Page) *Lista do estoque atual / Current list of products*
  - Botões rápidos de filtro e agrupamento: por categoria, validade próxima, estoque acabando, etc.
  - Botões de edição e dar baixa (zerar quantidade)
  - Alerta de item faltante na linha
  - Tooltip com foto do produto ao passar o mouse
- (Modal) *Registrar novas compras por código de barra / Register new items via bar code scan*
  - Adicionar item manualmente ou usar código de barras com câmera do celular
  - Editar item manualmente
  - Opção de marcar item como recorrente em toda compra
  - Botão rápido para dar baixa (setar valor pra zero)
- (Page) *Lista de compras automática / Automatic shopping list*
  - Gerar lista de compras com base na dispensa atual (cron job ou apertar botão)
  - Lembrete perto de datas especiais como aniversários, são joão, natal, etc
  - Incluir itens recorrentes
  - Marcar item como opcional se o preço estiver bom (R$)
- *Extras*
  - Login com google
  - Procurar mercados perto de mim
  - Comandos por voz
  - Histórico de preços por produto
  - Dar baixa escaneando a nota fiscal
  - Fazer scraping em sites de oferta

## Como rodar / How to run
1. Abra um terminal e siga até a pasta do projeto / Open a terminal and get to project folder
2. Crie um arquivo .env na pasta raíz usando o .env.example como exemplo / Create a .env file on root based on .env.example
3. Rode `npm install` para instalar as dependências / Run `npm install` to install dependencies
4. Rode `npm start` pra iniciar a aplicação em http://localhost/ / Run `npm start` to start the application at http://localhost/

Criado e mantido por / Created and maintained by (Eric Madureira)[https://www.linkedin.com/in/eric-madureira/].
