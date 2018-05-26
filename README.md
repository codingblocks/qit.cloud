Load urls for a file, parse them to (eventually) insert or update a search engine

## Running locally

```bash
cd podcast-feed-loader
npm install
npm test
npm start
```

## Running locally with Docker

Note: this does not push to any search engine, just parses the feed.

```bash
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run podcast-feed-loader
```

## Running locally with Docker AND Azure Search Key

```bash
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run -e SEARCH_PROVIDER='Azure' podcast-feed-loader -e SEARCH_PROVIDER=Azure -e AZURE_SEARCH_ENDPOINT='YOUR FULL ENDPOINT HERE!'  -e AZURE_SEARCH_API_KEY='YOUR KEY HERE!!' 
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