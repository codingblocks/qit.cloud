![qit logo](https://github.com/codingblocks/podcast-app/blob/master/website/images/icons/icon-256x256.png)

# qit: Listen to Programming Podcasts by Topic
qit...get it? get it? Like...Queue I.T.!

Ok so yeah, the title needs work, but the idea is to let programmers find and listen to podcasts by topic.

Check out a preview here: [https://reverent-shirley-6c1ba7.netlify.com/](https://reverent-shirley-6c1ba7.netlify.com/)

## Running the website

You need some sort of web server to run the website (at least, if you want to check it out with Lighthouse).

Something like this should work (TODO: Dockerize!)

```bash
cd website
# Python 2.x
python -m SimpleHTTPServer 8000
# Python 3.x
python -m http.server 8000
```

## SSL Proxy

[node-http-proxy](https://github.com/nodejitsu/node-http-proxy) server that will proxy a non-http resource at
https://endpoint/?url=URL_TO_PROXY as https.

Hosted on [zeit now](https://zeit.co/now).

## Podcast Feed Loader App

Load urls for a file, parse them to (eventually) insert or update a search engine.

Currently only supports Azure Search.

Azure Search Documentation:
https://docs.microsoft.com/en-us/azure/search/search-filters

### Running locally

```bash
cd podcast-feed-loader
npm install
npm test
npm start
```

### Running locally with Docker

Note: this does not push to any search engine, just parses the feed.

```bash
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run podcast-feed-loader
```

### Running locally with Docker

You can add the Azure environment variables if you have an Azure Search admin key. We're also setup to monitor with Airbrake, you can set the optional fields shown below to get that working as well.

```bash
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

## Other stuff that almost works

Pretty close to supporting these items, but no cigar.

### Deploying to Azure Container Instances

(You get the username/password from the "Access Keys" section of the ACR).
TODO This currently does not pick up the environment variables!! Does not work!

```bash
docker login podcast.azurecr.io
docker build -f Dockerfile.podcast-feed-loader . -t podcast.azurecr.io/podcast-feed-loader
docker push podcast.azurecr.io/podcast-feed-loader
```

### Deploying to Azure Functions

TODO This currently does not pick up the environment variables!! Does not work!

1. Create a function app (Windows for now)
2. Go into Function Settings and set it for version 2 preview
3. Change the Application Settings and change WEBSITE_DEFAULT_NODE_VERSION to 8.9.4
