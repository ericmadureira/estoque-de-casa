# Estoque de Casa
Sistema para controlar os itens da despensa da sua casa.

## Funcionalidades / Features
- Lista do estoque atual
  - Agrupamentos e filtros pre-definidos
    - agrupado por cômodo, validade próxima, estoque acabando, categoria
    - Dar baixa nos itens consumidos
    - Alerta de item faltante na linha
- Registrar novas compras e dar baixa
  - Adicionar item manualmente ou usar código de barras com câmera do celular
  - Editar item manualmente
  - Opção de marcar item como recorrente em toda compra
  - Botão rápido para dar baixa (setar valor pra zero)
- Lista de compras automática
  - Gerar lista de compras com base na dispensa atual (cron job ou apertar botão)
  - Lembrete perto de datas especiais como aniversários, são joão, natal, etc
  - Incluir itens recorrentes
  - Marcar item como opcional se o preço estiver bom (R$)
- Histórico de preços por produto
- Login com google
- Extras
  - Comandos por voz
  - Dar baixa escaneando a nota fiscal
  - Fazer scraping em sites de oferta
  - Buscar mercados perto de mim


## Como rodar / How to run
1. Abra um terminal e siga até a pasta do projeto
2. Crie um arquivo .env na pasta raíz usando o .env.example como exemplo
3. Rode `npm install` para instalar as dependências
4. Rode `npm start` pra iniciar a aplicação em http://localhost/

Criado e mantido por (Eric Madureira)[https://www.linkedin.com/in/eric-madureira/].
