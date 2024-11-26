"""
# **BeTalentAPI**

Bem-vindo ao repositório da **BeTalentAPI**! Este é um projeto backend desenvolvido em AdonisJS 5.9.0. Ele fornece funcionalidades de gerenciamento de usuários, clientes, produtos e vendas.

---

## **Tabela de Conteúdos**

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Rodando o Projeto](#rodando-o-projeto)
- [Estrutura de Rotas](#estrutura-de-rotas)
- [Exemplos de JSON para os Endpoints](#exemplos-de-json-para-os-endpoints)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## **Funcionalidades**

- **Gerenciamento de Usuários**:
  - Cadastro de usuários.
  - Login e autenticação com JWT.
  - Logout.

- **Clientes**:
  - CRUD completo (criação, listagem, edição e exclusão).
  - Filtro de vendas por mês e ano.

- **Produtos**:
  - CRUD completo.
  - Exclusão lógica para produtos.

- **Vendas**:
  - Registro de vendas associadas a clientes e produtos.

---

## **Tecnologias Utilizadas**

- **Node.js**
- **AdonisJS 5.9.0**
- **MySQL** como banco de dados.
- **Lucid ORM** para manipulação do banco de dados.
- **JWT** para autenticação.

---

## **Pré-requisitos**

Certifique-se de que os seguintes softwares estão instalados no seu sistema:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

---

## **Instalação**

Siga os passos abaixo para instalar e rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/betalentapi.git
   cd betalentapi
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o arquivo `.env`:
   ```bash
   cp .env.example .env
   ```

4. Configure o banco de dados no arquivo `.env`:
   ```env
   DB_CONNECTION=mysql
   MYSQL_HOST=127.0.0.1
   MYSQL_PORT=3306
   MYSQL_USER=seu_usuario
   MYSQL_PASSWORD=sua_senha
   MYSQL_DB_NAME=nome_do_banco
   ```

---

## **Configuração**

1. Gere a chave da aplicação:
   ```bash
   node ace generate:key
   ```

2. Rode as migrações para criar as tabelas no banco de dados:
   ```bash
   node ace migration:run
   ```

---

## **Rodando o Projeto**

Inicie o servidor de desenvolvimento:
```bash
node ace serve --watch
```

O servidor estará disponível em: [http://localhost:3333](http://localhost:3333)

---

## **Estrutura de Rotas**

### **Usuários**
| Método | Endpoint      | Descrição                     |
|--------|---------------|-------------------------------|
| POST   | /usuarios     | Cadastro de usuários          |
| POST   | /login        | Login de usuários             |
| POST   | /logout       | Logout de usuários            |

### **Clientes**
| Método | Endpoint          | Descrição                          |
|--------|-------------------|-------------------------------------|
| GET    | /clientes         | Listar todos os clientes           |
| GET    | /clientes/:id     | Detalhar cliente e suas vendas     |
| POST   | /clientes         | Criar um cliente                   |
| PUT    | /clientes/:id     | Atualizar um cliente               |
| DELETE | /clientes/:id     | Excluir cliente e suas vendas      |

### **Produtos**
| Método | Endpoint          | Descrição                     |
|--------|-------------------|-------------------------------|
| GET    | /produtos         | Listar todos os produtos      |
| GET    | /produtos/:id     | Detalhar um produto           |
| POST   | /produtos         | Criar um produto              |
| PUT    | /produtos/:id     | Atualizar um produto          |
| DELETE | /produtos/:id     | Exclusão lógica de um produto |

### **Vendas**
| Método | Endpoint  | Descrição          |
|--------|-----------|--------------------|
| POST   | /vendas   | Registrar uma venda|

---

## **Exemplos de JSON para os Endpoints**

### **Usuários**

#### **1. Cadastro de Usuário**
**Endpoint**: `POST /usuarios`  
**JSON de Exemplo**:
```json
{
  "email": "usuario@example.com",
  "senha": "senha123"
}
```

#### **2. Login**
**Endpoint**: `POST /login`  
**JSON de Exemplo**:
```json
{
  "email": "usuario@example.com",
  "senha": "senha123"
}
```

---

### **Clientes**

#### **1. Criar Cliente**
**Endpoint**: `POST /clientes`  
**JSON de Exemplo**:
```json
{
  "nome": "João Silva",
  "cpf": "12345678901"
}
```

#### **2. Atualizar Cliente**
**Endpoint**: `PUT /clientes/:id`  
**JSON de Exemplo**:
```json
{
  "nome": "João Atualizado",
  "cpf": "98765432100"
}
```

---

### **Produtos**

#### **1. Criar Produto**
**Endpoint**: `POST /produtos`  
**JSON de Exemplo**:
```json
{
  "nome": "Produto A",
  "descricao": "Descrição do Produto A",
  "preco": 100.50
}
```

#### **2. Atualizar Produto**
**Endpoint**: `PUT /produtos/:id`  
**JSON de Exemplo**:
```json
{
  "nome": "Produto Atualizado",
  "descricao": "Descrição atualizada do produto",
  "preco": 120.00
}
```

---

### **Vendas**

#### **1. Registrar Venda**
**Endpoint**: `POST /vendas`  
**JSON de Exemplo**:
```json
{
  "cliente_id": 1,
  "produto_id": 2,
  "quantidade": 3,
  "preco_unitario": 50.00,
  "preco_total": 150.00,
  "data_hora": "2024-11-25T14:00:00"
}
```

---

## **Contribuição**

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit das suas alterações:
   ```bash
   git commit -m 'Minha nova feature'
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---
"""
