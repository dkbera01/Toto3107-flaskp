FROM node:22-alpine

WORKDIR /home/node/app

ADD package.json .

RUN npm install

ADD . .

EXPOSE 3000

CMD ["node", "app.js"]
