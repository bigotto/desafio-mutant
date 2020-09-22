# Desafio NodeJS Mutant

## API de consulta de usuários

 - Documentação das rotas via [Postman](https://documenter.getpostman.com/view/8839823/TVKD2cvX)

## Execução do projeto 
 - Clonar o repositório
 - Para usar a aplicação com o docker:
  `` docker-compose up --build``

## Rotas

* /download: Consome a [API](https://jsonplaceholder.typicode.com/users) e exibe o retorno em JSON sem nenhum filtro

* /save: Consome a [API](https://jsonplaceholder.typicode.com/users) e salva os usuários apenas hospedados em suítes no banco de dados MySQL

* /log: Exibição dos logs salvos pela aplicação em um arquivo de texto para facilitar a vizulização