FROM node:8.9.4-alpine

ENV DOCKER=TRUE
ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /app

COPY . /app

ARG PORT

# Install app dependencies
RUN npm install

EXPOSE $PORT
