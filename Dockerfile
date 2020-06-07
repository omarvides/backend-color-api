FROM node:lts-alpine

WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]