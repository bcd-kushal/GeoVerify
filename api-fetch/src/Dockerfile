FROM node:20-alpine

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY * ./

ENV PORT=8001

EXPOSE 8001

CMD [ "npm", "start" ]
