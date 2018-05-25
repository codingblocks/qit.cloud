Load urls for a file, parse them to (eventually) insert or update a search engine

```
docker build -f Dockerfile.podcast-feed-loader . -t podcast-feed-loader
docker run podcast-feed-loader
```


Deploying...
(You get the username/password from the "Access Keys" section of the ACR)

```
docker login podcast.azurecr.io
docker build -f Dockerfile.podcast-feed-loader . -t podcast.azurecr.io/podcast-feed-loader
docker push podcast.azurecr.io/podcast-feed-loader
```