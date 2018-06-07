FROM node:8.9.4-alpine

ENV DOCKER=TRUE
ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /app

COPY . /app
# Install app dependencies
RUN npm install

ARG NODE_ENV
ARG PORT

CMD npm start


EXPOSE $PORT
