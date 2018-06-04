FROM node:8.9.4-alpine
RUN mkdir /home/.npm-global ; \
    mkdir -p /home/app ; \
    chown -R node:node /home/app ; \
    chown -R node:node /home/.npm-global
ENV PATH=/home/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/.npm-global

WORKDIR /app
# ADD podcast-feed-loader /app/

# Install app dependencies
COPY package.json /app

ENV NPM_CONFIG_LOGLEVEL error
RUN npm install

RUN npm install pm2 -g

ENV DOCKER=TRUE

# Bundle APP files
COPY . /app

ARG NODE_ENV
ARG PORT

# Compile app sources
# RUN npm run compile

# Remove dev dependencies
# RUN npm prune --production

# Run application in production
# Moved to docker-compose.prod.yml
# CMD [ "pm2-docker", "start", "/home/node/app/pm2.json" ]

# Make port from arguments available to the world outside this container
EXPOSE $PORT
