# COMMENTS

## Decisão da arquitetura utilizada

- Backend
  - Separado por camadas, utilizando a arquitetuda SOLID

- Frontend
  - Fiz a separação da camada de persistência de dados
  - Organizei a separação de rotas por views

## Lista de bibliotecas de terceiros utilizadas

- Backend
  - dotenv
  - express
  - prettier
  - type-orm
  - typescript
  - cors
  - uuid
  - vitest

- Frontend
  - axios
  - vuetify
  - vite

## O que você melhoraria se tivesse mais tempo

- Backend
  - Adicionaria algumas verificações de erros na api.
  - Adicionaria um método de autenticação.
  - Terminaria alguns métodos não entregue.
  - Criaria uma documentação da API.

- Frontend
  - Adicionaria o VUEX para trabalhar com dados centralizados.
  - Implementaria algumas features não entregues.
  - Adicionaria uma camada de login.
  - Adicionaria testes.

## Quais requisitos obrigatórios que não foram entregues

- Backend
  - Método de exclusão
  - Método de validação por RA.

- Frontend
  - Edição de estudante
  - Exclusão de estudante
  - Login


## Instruções para rodar o projeto
- Backend

  #### *Para rodar este projeto local, é necessário ter o docker e docker compose instalados*
  - entrar na pasta 'backend'
  - copie o conteudo do arquivo **.env.example** para um novo arquivo **.env**
  - rodar o comando `docker-compose up -d`
  - rodar o comando `npm run migration:run`

- Frontend
  - entrar na pasta 'frontend'
  - copie o conteudo do arquivo **.env.example** para um novo arquivo **.env**
  - rodar o comando `npm run dev`


## Prints da aplicação de frontend
![Listagem de Alunos](/mockups/student_index.png)
![Cadastro de Aluno](/mockups/student_create.png)
