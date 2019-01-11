The Podcast Feed Loader is responsible for parsing podcast feeds and normalizing them to a search engine. This process is typically run on a schedule.

Currently the process only supports Azure Search, but you can successfully run the feed without it configured.

Azure Search Documentation:
https://docs.microsoft.com/en-us/azure/search/search-filters

# Running locally
This is the simplest way to run, but it does require [Node 8.9.4](https://nodejs.org/en/download/)

```bash
cd podcast-feed-loader/app
npm install
npm test
npm start
```

This will run...however you also need to set some environment variables up in order to actually update the search engine. You can find more about the settings below. This is certainly do-able, but it's not recommend to create env variables just to run a project. That's where Docker comes in.

# Running with Docker
This is the *best* way to run, it requires [Docker](https://docs.docker.com/install/). 

You can pass the Azure environment variables along via the command line. There are a lot of them, so it's even better to set up a .env file. (TODO: More info on the .env file)

We're also setup to monitor with Airbrake, these also require environment variables.

```bash
cd podcast-feed-loader
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run podcast-feed-loader \
  -e SEARCH_PROVIDER='Azure' \
  -e AZURE_SEARCH_INDEX_NAME='{your index name here}' \
  -e AZURE_SEARCH_ENDPOINT='https://{your search name here name here}.search.windows.net/indexes/{your index name here}/docs/index?api-version={your version number here}' \
  -e AZURE_SEARCH_ADMIN_API_KEY='{key that allows for document updates}' \
  -e AZURE_SEARCH_API_VERSION='2017-11-11' \
  -e AIRBRAKE_PROJECTID='{airbrake project id}' \
  -e AIRBRAKE_PROJECTKEY='{airbrake project key}'
```

Note: You can run the container without any of the environment variables. It just won't update the search engine or register errors.

# Notes on Deployment
Still ironing this bit out, but here are some general notes on deployment options.

### Deploying to Azure Container Instances

You get the username/password from the "Access Keys" section of the Azure Container Registry.

This requires "baking in" the environment variables. (TODO: More here!)

```bash
docker login podcast.azurecr.io
docker build -f Dockerfile.podcast-feed-loader . -t podcast.azurecr.io/podcast-feed-loader
docker push podcast.azurecr.io/podcast-feed-loader
```

### Deploying to Azure Functions

This requires "baking in" the environment variables. (TODO: More here!)

1. Create a function app (Windows for now)
2. Go into Function Settings and set it for version 2 preview
3. Change the Application Settings and change WEBSITE_DEFAULT_NODE_VERSION to 8.9.4
