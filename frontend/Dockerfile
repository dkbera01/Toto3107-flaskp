FROM node:22-alpine

WORKDIR /home/node/app

ADD Package.json .

RUN npm install

ADD . .

EXPOSE 3000

CMD ["node", "app.js"]

