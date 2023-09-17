FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

ENV GPT_TOKEN=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

RUN npm install
COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]