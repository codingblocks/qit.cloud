FROM node:8.9.4-alpine
RUN mkdir /home/.npm-global ; \
    mkdir -p /home/app ; \
    chown -R node:node /home/app ; \
    chown -R node:node /home/.npm-global
ENV PATH=/home/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/.npm-global

WORKDIR /home/app
# ADD podcast-feed-loader /app/

# Install app dependencies
COPY package.json /home/app

ENV NPM_CONFIG_LOGLEVEL error

RUN npm install

ENV DOCKER=TRUE

# Bundle APP files
COPY . /home/app

ARG NODE_ENV
ARG PORT

# Compile app sources
# RUN npm run compile

# Remove dev dependencies
# RUN npm prune --production

# Run application in production
# Moved to docker-compose.prod.yml

# Make port from arguments available to the world outside this container
EXPOSE $PORT
