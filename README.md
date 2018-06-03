![qit logo](https://github.com/codingblocks/podcast-app/blob/master/website-react/public/images/icons/icon-144x144.png)

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

## Running the React website

```bash
cd website

npm install
npm start
```

## Linting the React website

This website uses the [Standard](https://github.com/standard/standard) style guide.
To auto-lint, just run:

```bash
standard --fix
```

## SSL Proxy

[node-http-proxy](https://github.com/nodejitsu/node-http-proxy) server that will proxy a non-http resource at
https://endpoint/?url=URL_TO_PROXY as https.

Hosted on [zeit now](https://zeit.co/now).

## Podcast Feed Loader

This is the part of the product that is responsible for importing the data.

It loads podcast feed urls from a file, normalizes them, and then updates them in a search engine. Currently only supports Azure Search.

Read more about it here: [Podcast Feed Loader on the wiki](https://github.com/codingblocks/podcast-app/wiki/Podcast-Feed-Loader)
