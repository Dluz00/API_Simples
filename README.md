# Gerenciador de Usuários e Tarefas com Express.js

Este é um projeto de API simples criado com Node.js e Express.js, que permite gerenciar usuários e suas tarefas. A API permite adicionar usuários, criar tarefas, listar tarefas de um usuário específico, marcar tarefas como concluídas e excluir tarefas.

## Funcionalidades

- **Adicionar Usuário:** Cria um novo usuário com um nome fornecido.
- **Adicionar Tarefa:** Adiciona uma nova tarefa a um usuário específico.
- **Listar Tarefas:** Lista todas as tarefas de um usuário.
- **Marcar Tarefa como Concluída:** Atualiza o status de uma tarefa para concluída.
- **Excluir Tarefa:** Remove uma tarefa específica de um usuário.

## Endpoints da API

### 1. Adicionar Usuário

- **Rota:** `POST /users`
- **Corpo da Requisição:** `{ "name": "Nome do Usuário" }`
- **Resposta:** Retorna o usuário criado.

### 2. Adicionar Tarefa para um Usuário

- **Rota:** `POST /users/:userId/tasks`
- **Parâmetro:** `userId` - ID do usuário
- **Corpo da Requisição:** `{ "description": "Descrição da Tarefa" }`
- **Resposta:** Retorna a tarefa criada.

### 3. Listar Tarefas de um Usuário

- **Rota:** `GET /users/:userId/tasks`
- **Parâmetro:** `userId` - ID do usuário
- **Resposta:** Retorna uma lista de tarefas do usuário.

### 4. Marcar Tarefa como Concluída

- **Rota:** `PUT /users/:userId/tasks/:taskId`
- **Parâmetros:** 
  - `userId` - ID do usuário
  - `taskId` - ID da tarefa
- **Resposta:** Retorna a tarefa atualizada.

### 5. Excluir Tarefa de um Usuário

- **Rota:** `DELETE /users/:userId/tasks/:taskId`
- **Parâmetros:** 
  - `userId` - ID do usuário
  - `taskId` - ID da tarefa
- **Resposta:** Retorna uma mensagem de sucesso.

## Como Executar o Projeto

1. Clone este repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor:
    ```bash
    node index.js
    ```
5. A API estará disponível em `http://localhost:3000`.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Body-Parser

## Estrutura do Projeto

- `index.js`: Arquivo principal que define as rotas da API.
- `classes/`: Pasta que contém as classes `User` e `Task`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
