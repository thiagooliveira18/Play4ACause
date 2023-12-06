# Play4ACause

</br>

## Projeto

Este projeto foi proposto pela Play 4 a Cause em um processo de Desenvolvedor, onde teria que desenvolver uma aplicação Full Stack de um chat utilizando protocolo de tempo real.

</br>

## Tecnologias Utilizadas

- Para Frontend:
  - NextJs
  - Tailwind
  - Axios
  - React Hook Form
  - Socket.io
  - Docker

- Para Backend:
  - NestJs
  - PrismaORM
  - Socket.io / WebSockets

- Banco de Dados:
   - Postgre SQL

</br>

## Frontend

### Variávies de ambiente

```bash
# Arquivo padrão .env.local
NEXT_PUBLIC_BASE_URL_BACKEND=localhost:porta
NEXT_PUBLIC_PORT_SOCKET=localhost:porta
```

### Iniciando

<br/>

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

</br>

## Backend
### Variávies de ambiente

```bash
# Arquivo padrão .env
DATABASE_URL="postgresql://postgres:{password}@localhost:{port}/{database}?schema=public" #Porta 5432 é a porta padrão do PostgreSQL
PORT=porta_do_backend
JWT_SECRET="Seu segredo do JWT"
```

### Iniciando

<br/>

```bash
# Para acessar o arquivo Backend
$ cd ./backend

# Para instalação de Dependências
$ npm install

# Para iniciar a aplicação Backend
$ npm run start:dev

```

# Autor
- Thiago Oliveira dos Santos
