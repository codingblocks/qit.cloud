FROM node:8.9.4-alpine
ENV DOCKER=TRUE
ENV NPM_CONFIG_LOGLEVEL error

WORKDIR /app
# ADD podcast-feed-loader /app/

COPY . /app

RUN npm install && npm install pm2 -g
# Bundle APP files

ARG NODE_ENV
ARG PORT

CMD [ "pm2-docker", "start", "/app/pm2.json" ]

# Make port from arguments available to the world outside this container
EXPOSE $PORT
