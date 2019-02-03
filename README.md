![qit logo](https://github.com/codingblocks/podcast-app/blob/master/website/public/images/icons/icon-144x144.png)

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors)
[![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg)](https://cypress.io)
[![Ruby Version](https://img.shields.io/badge/Ruby-v2.5.1-green.svg)](https://www.ruby-lang.org/en)
[![Rails Version](https://img.shields.io/badge/Rails-v5.2.1-green.svg)](https://rubyonrails.org/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-green.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

[![Build Status](https://travis-ci.org/codingblocks/qit.cloud.svg?branch=master)](https://travis-ci.org/codingblocks/podcast-app)
[![Maintainability](https://api.codeclimate.com/v1/badges/ed8b274c56737a471ec9/maintainability)](https://codeclimate.com/github/codingblocks/qit.cloud/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ed8b274c56737a471ec9/test_coverage)](https://codeclimate.com/github/codingblocks/qit.cloud/test_coverage)

[![Netlify Status](https://api.netlify.com/api/v1/badges/3cedbed6-2dac-482d-a7ab-56136a5f86ad/deploy-status)](https://app.netlify.com/sites/reverent-shirley-6c1ba7/deploys)

# qit: Listen to Programming Podcasts by Topic
qit...get it? get it? Like...Queue I.T.!

Ok so yeah, the title needs work, but the idea is to let programmers find and listen to podcasts by topic.

Check out a preview here: [https://qit.cloud](https://qit.cloud)

## Running the website

The website is a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/) built on [ReactJs](https://reactjs.org/) that uses [styled components](https://www.styled-components.com/docs/basics).


## NEW Before you run this program ##
Since we are improving a lot of the features, the most simple way to get the app to work is to download and install Docker on your machine. This only needs done once, and is the best way to enjoy all of the options. The specifics for the software are on the pages, and should be simple to follow.

If you do not work in the software field, simply installing the program correctly should be enough to allow you to run the local version.

### Installation Instructions ###
[Install Docker Desktop](https://docs.docker.com/install/#supported-platforms)

### If your system will not take Docker ###
There is another way to do this, but it requries a few more steps. You will need to download and install [Ruby](https://www.ruby-lang.org/en/downloads/) and [Postgre](https://www.postgresql.org/download/). 


### Running locally:

You can also use this by installing Ruby and Postgres: two programs that will allow the files to run. this setup is a bit more complex. 

```bash
# Start Postgres and the API
cd qit-api
docker-compose up -d

cd ../website
npm install
npm start
```

### Running in "production:

Well, that's a bit complicated right now. The website is in netlify, the API is hosted in linode, the search engine, the podcast-feed-loader is a scheduled serverless function, the proxy is in heroku, and the db is in elephantsql. Phew!

More on how to get this setup...later.

As for what settings are available to you, there are a bunch of env variables to know about. Everything works with the defaults, but these provide greater control and optional features. These are available for the site:

#### Website

```bash
REACT_APP_BASE_SEARCH_URL
REACT_APP_BASE_API_URL || 'http://localhost:3005/api/v1',
REACT_APP_CORS_PROXY || 'https://cors-anywhere.herokuapp.com/',
REACT_APP_MAX_SEARCH_RESULTS || 200,
REACT_APP_SEARCH_API_KEY || '18EA821D408444FCF3DC3EC4F3790FEC',
REACT_APP_PLAYBACK_RATES
REACT_APP_AIRBRAKE_PROJECTID
REACT_APP_AIRBRAKE_PROJECTKEY
```

#### API

You can see what is available for the api in the qit-api/production-setup/.env file

#### Podcast Feed Loader

Check out the podcast-feed-loader project for a listing there.

### Linting the React website

This website uses the [Standard](https://github.com/standard/standard) style guide, you can run the linter with the command below but we'll also zap you with a pre-commit hook before you check any semi-colon in.

```bash
standard --fix
```
### E2E the React website

#### With the Dev Server running

To run cypress interactive mode, run the following commands:

```bash
cd website
npm run cypress:open
<click run all tests on the GUI>
```

To run cypress headless mode, run the following commands:

```bash
cd website
npm run cypress:run
```

#### Without the Dev Server running

```bash
cd website
npm run local:e2e
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

## How can I add a new podcast?

The search engine gets populated via a different github project, the [QIT Podcast Feed Loader](https://github.com/codingblocks/qit-podcast-feed-loader) project.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/81006?v=4" width="100px;" alt="Joe Zack"/><br /><sub><b>Joe Zack</b></sub>](http://joezack.com)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=THEjoezack "Code") [🎨](#design-THEjoezack "Design") [🚇](#infra-THEjoezack "Infrastructure (Hosting, Build-Tools, etc)") [📖](https://github.com/codingblocks/qit.cloud/commits?author=THEjoezack "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/25411099?v=4" width="100px;" alt="Arlene"/><br /><sub><b>Arlene</b></sub>](https://github.com/ArleneAndrews)<br />[📖](https://github.com/codingblocks/qit.cloud/commits?author=ArleneAndrews "Documentation") [⚠️](https://github.com/codingblocks/qit.cloud/commits?author=ArleneAndrews "Tests") [💻](https://github.com/codingblocks/qit.cloud/commits?author=ArleneAndrews "Code") | [<img src="https://avatars0.githubusercontent.com/u/11421183?v=4" width="100px;" alt="Vladimir"/><br /><sub><b>Vladimir</b></sub>](https://github.com/vlado92)<br />[🚇](#infra-vlado92 "Infrastructure (Hosting, Build-Tools, etc)") [💻](https://github.com/codingblocks/qit.cloud/commits?author=vlado92 "Code") [📖](https://github.com/codingblocks/qit.cloud/commits?author=vlado92 "Documentation") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## Legacy Contributors List
- [Aaron Clawson](https://github.com/MadVikingGod)
- [Adam Lantz](https://github.com/AdamLantz)
- [Aditya Kolla](https://github.com/aditya-kolla)
- [Arlene Andrews](https://github.com/arleneandrews)
- [Ben Steward](https://github.com/tehpsalmist)
- [Brandon Lyons](https://github.com/lyonsbp)
- [Dave Follett](https://github.com/davefollett)
- [Joe Zack](https://github.com/THEjoezack)
- [Mikkel Madsen](https://github.com/Madsn)
- [Nicolas Marcora](https://github.com/nmarcora)
- [Paul Mcilreavy](https://github.com/pmcilreavy)
- [Sung Kim](https://github.com/dance2die/)
- [Vladimir Kunarac](https://github.com/vlado92)
