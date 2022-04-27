FROM node:17.9-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "yarn", "start" ]