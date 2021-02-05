FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g eslint

COPY ./package.json /usr/src/app/package.json
RUN npm install

COPY . /usr/src/app

