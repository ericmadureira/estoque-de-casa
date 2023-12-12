# Estoque de Casa
Sistema para controlar os itens da despensa da sua casa.

## Funcionalidades / Features
- (TELA) Lista do estoque atual
  - Botões rápidos de filtro e agrupamento: por categoria, validade próxima, estoque acabando, etc.
  - Botões de edição e dar baixa (zerar quantidade)
  - Alerta de item faltante na linha
  - Tooltip com foto do produto ao passar o mouse
- (MODAL) Registrar novas compras por código de barra
  - Adicionar item manualmente ou usar código de barras com câmera do celular
  - Editar item manualmente
  - Opção de marcar item como recorrente em toda compra
  - Botão rápido para dar baixa (setar valor pra zero)
- (TELA) Lista de compras automática
  - Gerar lista de compras com base na dispensa atual (cron job ou apertar botão)
  - Lembrete perto de datas especiais como aniversários, são joão, natal, etc
  - Incluir itens recorrentes
  - Marcar item como opcional se o preço estiver bom (R$)
- Extras
  - Login com google
  - Procurar mercados perto de mim
  - Comandos por voz
  - Histórico de preços por produto
  - Dar baixa escaneando a nota fiscal
  - Fazer scraping em sites de oferta

## Como rodar / How to run
1. Abra um terminal e siga até a pasta do projeto
2. Crie um arquivo .env na pasta raíz usando o .env.example como exemplo
3. Rode `npm install` para instalar as dependências
4. Rode `npm start` pra iniciar a aplicação em http://localhost/

Criado e mantido por (Eric Madureira)[https://www.linkedin.com/in/eric-madureira/].
