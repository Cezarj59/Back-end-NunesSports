# Back end - API Restful CRUD Nunes Sports

![Node.js](https://img.shields.io/badge/Node.js-LTS-brightgreen)
![Express](https://img.shields.io/badge/Express-4.17.1-blue)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM%20for%20MongoDB-yellow)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-Cloud%20Database-brightgreen)
![Render](https://img.shields.io/badge/Render-Hosting-lightgrey)
![Insomnia](https://img.shields.io/badge/Insomnia-API%20Testing-purple)


## Visão Geral

Este projeto consiste em uma API para a Nunes Sports, que oferece operações de CRUD (Create, Read, Update, Delete) para produtos da loja. A solução inclui uma base de dados MongoDB com uma tabela de produtos, contendo campos como Nome, Código, Descrição e Preço. Além disso, uma interface web foi desenvolvida para permitir que usuários visualizem, criem, editem e excluam produtos, refletindo todas as ações no banco de dados.


1. Base de dados com uma tabela 'produtos' com os campos:
   - Nome do produto
   - Código do produto
   - Descrição do produto
   - Preço do produto
   - Utilização de JSON como formato de comunicação
   - Banco de dados MongoDB Atlas na nuvem

## Tecnologias Utilizadas

- Node.js (LTS)
- Express 4.17.1
- Mongoose (Object Data Modeling para MongoDB)
- MongoDB Atlas para armazenamento de dados
- Render para hospedagem
- Insomnia para testes de API

## Como Usar

1. Clone este repositório (Opcional: Se você estiver interessado em examinar o código-fonte ou contribuir para o projeto).
   
2. Configure seu ambiente de desenvolvimento com as tecnologias mencionadas.

3. Execute a aplicação Node.js. Utilize o seguinte comando no terminal:

   ```bash
   npm start
   # ou
   node src/server.js
   ```


4. Utilize os seguintes endpoints para realizar operações na API:
 

- **Listar Todos os Produtos:**

  ```
  [GET] http://localhost:3001/products/listar
  ```

- **Buscar Produto por ID:**

  ```
  [GET] http://localhost:3001/products//buscar/:productId
  ```

- **Cadastrar Produto:**

  ```
  [POST] http://localhost:3001/products/cadastrar
  ```

- **Atualizar Produto por ID:**

  ```
  [PUT] http://localhost:3001/products/atualizar/:productId
  ```

- **Deletar Produto por ID:**

  ```
  [DELETE] http://localhost:3001/products/deletar/:productId
  ```

Certifique-se de que as tecnologias necessárias estejam configuradas no seu ambiente antes de utilizar os endpoints. Você pode usar ferramentas como o __`INSOMNIA`__, __`cURL`__ ou __`POSTMAN`__ para realizar as operações na API.

## Como Testar os Endpoints

Você pode utilizar o cURL para testar os endpoints diretamente do terminal ou linha de comando. Abaixo estão alguns exemplos básicos:

### Cadastro de Produtos
```bash
curl -X POST -H "Content-Type: application/json" -d '{"nome":"Nome do Produto", "codigo":"12345", "descricao":"Descrição do Produto", "preco":99.99}' http://localhost:3001/products/cadastrar
```
### Atualização de Produto (Substitua 'productId' pelo ID do Produto)
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"nome":"Novo Nome", "codigo":"54321", "descricao":"Nova Descrição", "preco":129.99}' http://localhost:3001/products/atualizar/:productId

```
### Listar Todos os Produtos
```bash
curl -X GET http://localhost:3001/products/listar
```
### Busca de Produto por ID (Substitua 'productId' pelo ID do Produto)
```bash
curl -X GET http://localhost:3001/products/buscar/:productId
```
### Deletar Produto por ID (Substitua 'productId' pelo ID do Produto)
```bash
curl -X DELETE http://localhost:3001/products/deletar/:productId
```


# Endpoints

A seguir estão os endpoints disponíveis do projeto hospedado:

- ## <span style="font-size:larger;">Cadastro de Produto</span>  
  - **URL:** [https://nunes-sports-axl7.onrender.com/products/cadastrar](https://nunes-sports-axl7.onrender.com/products/cadastrar)
  - **Método:** POST
  - **Input:**
    - Campos necessários para cadastro (ex: nome, código, descrição, preço)

    ```json
    {
      "nome": "Nome do Produto",
      "codigo": "12345",
      "descricao": "Descrição do Produto",
      "preco": 99.99
    }
    ```
      
    - **Output (sucesso):**
      - Retorno com informações do produto cadastrado
    ```json
    {
      "message": "Produto 'Nome do Produto' cadastrado com Sucesso!!!",
      "id": "productId",
      "data_criacao": "Data de Criação",
      "data_atualizacao": "Data de Atualização"
    }
    ```

    - **Erro:**
      - Internal Server Error

- ## <span style="font-size:larger;">Atualizar produto</span> 
  - **URL:** [https://nunes-sports-axl7.onrender.com/products/atualizar/:productId](https://nunes-sports-axl7.onrender.com/products/atualizar/:productId)
  - **Método:** PUT
  - **URL Params:**
    - `:productId` - ID do produto a ser atualizado
  - **Input:**
    - Campos a serem atualizados (ex: nome, código, descrição, preço) em formato JSON
   
    ```json
    {
      "nome": "Novo Nome",
      "codigo": "54321",
      "descricao": "Nova Descrição",
      "preco": 129.99
    }
    ```
          
      - **Output (sucesso):**
        - Retorno com informações atualizadas do produto
    ```json
    {
      "message": "Produto atualizado com sucesso",
      "id": "productId",
      "data_criacao": "Data de Criação",
      "data_atualizacao": "Data de Atualização"
    }
    ```

      - **Erros:**
        - Internal Server Error

- ## <span style="font-size:larger;">Listar todos os Produtos</span>
  - **URL:** [https://nunes-sports-axl7.onrender.com/products/listar](https://nunes-sports-axl7.onrender.com/products/listar)
  - **Método:** GET
  - **Output (sucesso):**
    - Retorno com todos os Produtos listados
      
    ```json
    [
      {
        "nome": "Nome do Produto 1",
        "codigo": "12345",
        "descricao": "Descrição do Produto 1",
        "preco": 99.99,
        "data_criacao": "Data de Criação",
        "data_atualizacao": "Data de Atualização"
      },
      {
        "nome": "Nome do Produto 2",
        "codigo": "67890",
        "descricao": "Descrição do Produto 2",
        "preco": 149.99,
        "data_criacao": "Data de Criação",
        "data_atualizacao": "Data de Atualização"
      }
      // ...
    ]
    ```
          
      - **Erros:**
        - Internal Server Error

- ## <span style="font-size:larger;">Busca de Produto por ID</span>  
  - **URL:** [https://nunes-sports-axl7.onrender.com/products/buscar/:productId](https://nunes-sports-axl7.onrender.com/products/buscar/:productId)
  - **Método:** PUT
  - **URL Params:**
    - `:productId` - ID do produto  
 
      
  - **Output (sucesso):**
    - Retorno com as informações do produto
    
    ```json
    {
      "nome": "Nome do Produto",
      "codigo": "12345",
      "descricao": "Descrição do Produto",
      "preco": 99.99,
      "data_criacao": "Data de Criação",
      "data_atualizacao": "Data de Atualização"
    }
    ```      
      - **Erros:**
        - Produto não encontrado
        - Internal Server Error

    - ## <span style="font-size:larger;">Deleção de Produto por ID</span>
      - **URL:** [https://nunes-sports-axl7.onrender.com/products/deletar/:productId](https://nunes-sports-axl7.onrender.com/products/deletar/:productId)
      - **Método:** DELETE 
      - **URL Params:**
        - `:productId` - ID do Produto a ser deletado
          
      - **Output (sucesso):**
        - Retorno com mensagem de sucesso
        
    ```json
    {
      "message": "Produto deletado com sucesso!!!"
    }
    ```    
      
      - **Erros:**
        - Produto não encontrado
        - Internal Server Error

## Estrutura do Projeto

A estrutura deste projeto segue a organização abaixo:

- `src`: Contém o código-fonte Node.js da aplicação.
- `config`: Armazena configurações específicas da aplicação.
- `controllers`: Responsável por conter os controladores da lógica de negócios.
- `database`: Mantém os arquivos relacionados ao banco de dados, como conexões e configurações.
- `middlewares`: Contém middlewares utilizados na aplicação.
- `models`: Guarda os modelos de dados utilizados na aplicação.
- `server.js`: Ponto de entrada da aplicação, contendo as configurações e definição das rotas da API.


## Sistema de Build com Gerenciamento de Dependências

O projeto utiliza o npm (Node Package Manager) para:

- **Gerenciamento de Dependências:** Todas as dependências do projeto são definidas no arquivo `package.json` e podem ser instaladas usando o comando:
  ```bash
  npm install
  
## Padronização de Código

- **ESLint:** O projeto utiliza o ESLint para manter a consistência no estilo do código. Os padrões de estilo são definidos no arquivo `.eslintrc.json` e a verificação pode ser feita com o comando:
  ```bash
  npm run lint
  


##  <h3 align="left">Languages and Tools:</h3>
<p align="left">
  <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
  <a href="https://nodejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/> </a>
  <a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="50" height="50"/> </a>
  <a href="https://jwt.io/" target="_blank" rel="noreferrer"> <img src="https://jwt.io/img/pic_logo.svg" alt="jwt" width="50" height="50"/> </a>
  <a href="https://mongoosejs.com/" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/Mongoose-ODM%20for%20MongoDB-yellow" alt="mongoose" width="50" height="50"/> </a>
  <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/> </a>
  <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="50" height="50"/> </a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50"/> </a>
  <a href="https://eslint.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original-wordmark.svg" alt="eslint" width="50" height="50"/> </a>
  <a href="https://ubuntu.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ubuntu/ubuntu-plain-wordmark.svg" alt="ubuntu" width="50" height="50"/> </a>
  <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain-wordmark.svg" alt="vscode" width="50" height="50"/> </a>
</p>




