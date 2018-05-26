Load urls for a file, parse them to (eventually) insert or update a search engine

## Running locally

```
cd podcast-feed-loader
npm install
npm test
npm start
```

## Running locally with Docker

```bash
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run podcast-feed-loader
```

## Deploying to Azure Container Instances

(You get the username/password from the "Access Keys" section of the ACR)

```bash
docker login podcast.azurecr.io
docker build -f Dockerfile.podcast-feed-loader . -t podcast.azurecr.io/podcast-feed-loader
docker push podcast.azurecr.io/podcast-feed-loader
```

## Deploying to Azure Functions

1. Create a function app (Windows for now)
2. Go into Function Settings and set it for version 2 preview
3. Change the Application Settings and change WEBSITE_DEFAULT_NODE_VERSION to 8.9.4