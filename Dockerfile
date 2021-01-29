From node:12.20.1-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "./bin/www" ]