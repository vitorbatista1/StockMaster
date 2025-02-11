❗️❗️ <h1>Projeto Em Desenvolvimento</h1>❗️❗️
# 📦 **StockFlow** - API de Gerenciamento de Estoque

**StockFlow** é uma API poderosa e flexível construída com **Node.js**, **Express**, e **PostgreSQL** para ajudar você a gerenciar o estoque de sua empresa de maneira eficiente. Seja para controlar produtos, fornecedores, movimentações ou gerar relatórios de estoque, esta API vai facilitar sua vida!

## 🚀 **Funcionalidades**

- **Gerenciamento de Produtos**  
  - Cadastro, edição, remoção e listagem de produtos.
  - Categorias de produtos para uma organização eficaz.

- **Controle de Estoque**  
  - Registro de entradas e saídas de produtos.
  - Evita que o estoque fique negativo.
  - Histórico completo de movimentações.

- **Gestão de Fornecedores**  
  - Cadastro de fornecedores.
  - Relacionamento de produtos com seus respectivos fornecedores.

- **Relatórios de Estoque**  
  - Relatório de movimentações de estoque (entrada/saída).
  - Relatório de produtos com baixo estoque.

- **Autenticação de Usuários**  
  - Cadastro de usuários com autenticação via JWT (JSON Web Tokens).
  - Controle de permissões de acesso.

## 🌟 **Tecnologias Utilizadas**

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework minimalista para criação da API.
- **PostgreSQL**: Banco de dados relacional robusto.
- **JWT**: Autenticação de usuários com tokens.
- **bcrypt.js**: Criptografia de senhas.
- **CORS**: Segurança e controle de acesso à API.

## 🛠️ **Como Rodar o Projeto**

### 1. **Clone o Repositório**
```bash
git clone https://github.com/seu-usuario/StockFlow.git
cd StockFlow
```

### 2. **Instale as Dependências**
```bash
npm install
```

### 3. **Configure o Banco de Dados**
Crie um banco de dados PostgreSQL e configure a conexão no arquivo `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_NAME=estoque
```

### 4. **Inicie o Servidor**
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`.

## 📋 **Rotas Disponíveis**

### 🚪 **Autenticação**

- **POST** `/auth/register` - Registrar um novo usuário.
- **POST** `/auth/login` - Fazer login e obter um token JWT.

### 📦 **Produtos**

- **GET** `/products` - Listar todos os produtos.
- **POST** `/products` - Adicionar um novo produto.
- **PUT** `/products/:id` - Atualizar um produto.
- **DELETE** `/products/:id` - Deletar um produto.

### 🔄 **Movimentações de Estoque**

- **POST** `/inventory/move` - Registrar uma movimentação de estoque (entrada/saída).

### 📊 **Relatórios**

- **GET** `/reports/low-stock` - Listar produtos com estoque baixo.
- **GET** `/reports/movement-history` - Visualizar o histórico de movimentações.

### 📜 **Gestão de Fornecedores**

- **GET** `/suppliers` - Listar fornecedores.
- **POST** `/suppliers` - Adicionar um novo fornecedor.

## 🔐 **Segurança**

- **JWT** para autenticação e autorização de usuários.
- **bcrypt.js** para criptografar senhas de usuários.

## 🌍 **Deploy e Uso**

Você pode fazer o deploy dessa API em servidores como **Heroku**, **Render**, **Railway** ou até mesmo em uma VPS, utilizando **Docker** para facilitar a configuração.

### Para usar no **Heroku**, por exemplo:
1. Crie um aplicativo no **Heroku**.
2. Conecte seu repositório do GitHub.
3. Defina as variáveis de ambiente no painel do Heroku.
4. Faça o deploy automaticamente.

## 💡 **Contribua com o Projeto**

Se você tem sugestões, correções ou melhorias, fique à vontade para abrir um **pull request**!

- **Passos para contribuir**:
  1. Fork o repositório.
  2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
  3. Faça suas alterações e faça o commit (`git commit -am 'Adicionando nova feature'`).
  4. Push para a branch (`git push origin minha-feature`).
  5. Abra um pull request no GitHub.

## 📣 **Licença**

Este projeto está licenciado sob a **MIT License**.

---

🌟 **Aproveite o poder do StockFlow para transformar a gestão de estoque da sua empresa!** 🌟
