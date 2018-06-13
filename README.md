![qit logo](https://github.com/codingblocks/podcast-app/blob/master/website-react/public/images/icons/icon-144x144.png)

# qit: Listen to Programming Podcasts by Topic
qit...get it? get it? Like...Queue I.T.!

Ok so yeah, the title needs work, but the idea is to let programmers find and listen to podcasts by topic.

Check out a preview here: [https://qit.cloud](https://qit.cloud)

### Important Note!

Currently any changes to the website project require bumping the service worker version. See [issue #28](https://github.com/codingblocks/podcast-app/issues/28)

## Running the website

The website is a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) built on [ReactJs](https://reactjs.org/) that uses [styled components](https://www.styled-components.com/docs/basics).

```bash
cd website-react

npm install
npm start
```

### Linting the React website

This website uses the [Standard](https://github.com/standard/standard) style guide.
To auto-lint, just run:

```bash
standard --fix
```
#### Vladimir`s version of docker
Before running dockers, run
```bash
docker network create codingblocks
```
so that in future containers are able to see each others, within this network

###### Spin docker containers
Go to desired folder.
```
# test docker enviroment bindings before creating containers
docker-compose config

# start local development
docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d

# start regular docker
docker-compose build && docker-compose up [ OPTIONAL ] -d (if console is not needed)  
```

Command to stop container:

```;bash

# to stop containers
docker-compose stop
```

## SSL Proxy

[node-http-proxy](https://github.com/nodejitsu/node-http-proxy) server that will proxy a non-http resource at
https://endpoint/?url=URL_TO_PROXY as https.

Hosted on [zeit now](https://zeit.co/now).

## Podcast Feed Loader

This is the part of the product that is responsible for importing the data.

It loads podcast feed urls from a file, normalizes them, and then updates them in a search engine. Currently only supports Azure Search.

Read more about it here: [Podcast Feed Loader on the wiki](https://github.com/codingblocks/podcast-app/wiki/Podcast-Feed-Loader)

## Contributors
- [Joe Zack](https://github.com/THEjoezack)
- [Nicolas Marcora](https://github.com/nmarcora)
- [Mikkel Madsen](https://github.com/Madsn)
- [Adam Lantz](https://github.com/AdamLantz)
- [Ben Steward](https://github.com/tehpsalmist)
- [Aaron Clawson](https://github.com/MadVikingGod)
- [Vladimir Kunarac](https://github.com/vlado92)

## Trello for additional insight 
[QIT Trello Board](https://trello.com/b/RTgaMRh0/qit)
