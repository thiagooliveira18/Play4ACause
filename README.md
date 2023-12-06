# Play For A Cause

</br>

## Projeto

Este projeto foi desenvolvido a partir do desafio proposto pela Play For a Cause, para participação de um processo seletivo para a vaga de Desenvolvedor Full-Stack. Neste projeto o objetivo era desenvolver uma aplicação de chat utilizando tecnologias relacionadas ao ecosistema Javascript e fazendo o uso de protocolo Real Time, além da integração com uma solução de banco de dados Postgre.

</br>

## Tecnologias Utilizadas

- Para Frontend:
  - NextJs
  - Tailwind
  - Axios
  - React Hook Form
  - Socket.io

- Para Backend:
  - NestJs
  - PrismaORM
  - Socket.io / WebSockets

- Banco de Dados:
   - Postgre SQL
- Docker

</br>

## Frontend

### Variávies de ambiente

```bash
# Arquivo padrão .env.local
NEXT_PUBLIC_BASE_URL_BACKEND=localhost:porta
NEXT_PUBLIC_PORT_SOCKET=localhost:porta
```

### Iniciando Localmente

```bash
# Para acessar o arquivo Frontend
$ cd ./frontend

# Para instalação de Dependências
$ npm install 

# Para iniciar a aplicação do Frontend
$ npm run dev
# ou
$ yarn dev
# ou
$ pnpm dev
# ou
$ bun dev
```
Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

### Iniciando com Docker

```bash
# Para criar a imagem do projeto no Docker
$ docker build -t nextjs-docker .

# Para subir um container no Docker com a imagem do projeto
$ docker run -p 3000:3000 nextjs-docker
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

</br>

## Backend

### Variávies de ambiente

```bash
# Arquivo padrão .env
DATABASE_URL="postgresql://postgres:{password}@localhost:{port}/{database}?schema=public" #Porta 5432 é a porta padrão do PostgreSQL
PORT=porta_do_backend
JWT_SECRET="Seu segredo do JWT"
```

### Iniciando Localmente

```bash
# Para acessar o arquivo Backend
$ cd ./backend

# Para instalação de Dependências
$ npm install

# Para iniciar a aplicação Backend
$ npm run start:dev

```

### Iniciando com Docker

```bash
# Para acessar o arquivo Backend
$ cd ./backend

# Para criar a imagem do projeto no Docker
$ docker build -t backend-nestjs .

# Para subir um container no Docker com a imagem do projeto
$ docker run -p 8080:8080 backend-nestjs
```

# Autor
- Thiago Oliveira dos Santos
