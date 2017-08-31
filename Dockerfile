FROM node:8

WORKDIR /app

COPY package.json package.json

RUN npm install -g webpack

RUN npm install

COPY . /app

CMD npm run build

