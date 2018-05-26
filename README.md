Load urls for a file, parse them to (eventually) insert or update a search engine

## Running locally with Docker
```
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run podcast-feed-loader
```

## Running locally
```
cd podcast-feed-loader
npm install
npm test
npm start
```

## Deploying to Azure Functions
(You get the username/password from the "Access Keys" section of the ACR)

```
docker login podcast.azurecr.io
docker build -f Dockerfile.podcast-feed-loader . -t podcast.azurecr.io/podcast-feed-loader
docker push podcast.azurecr.io/podcast-feed-loader
```

Requires the Azure beta (2.x)
Application Settings:
WEBSITE_DEFAULT_NODE_VERSION 8.9.4