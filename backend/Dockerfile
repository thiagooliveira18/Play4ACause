FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=production

COPY . .

RUN npm run build

RUN npx prisma generate

CMD ["node","dist/main"]