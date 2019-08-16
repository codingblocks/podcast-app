![qit logo](https://github.com/codingblocks/podcast-app/blob/master/website/public/images/icons/icon-144x144.png)

[![All Contributors](https://img.shields.io/badge/all_contributors-17-orange.svg?style=flat-square)](#contributors)
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

### If your system does not support docker ###
You will need to download and install [Ruby](https://www.ruby-lang.org/en/downloads/) and [Postgre](https://www.postgresql.org/download/). Warning! No further instruction exist at this time for this method.


### Running locally:
<ol>
  <li>Create a fork of the qit repo.</li>
  <li>Clone forked repo.</li>
  <li>Run following commands in the commandline of your choice

```bash
# Start Postgres and the API
docker-compose up -d

# Setup pre-commit hooks
npm install

# Setup front-end
cd ../website
npm install
npm start
```
</li>
</ol>



### Running in "production:

Well, that's a bit complicated right now. The website is in netlify, the API is hosted in linode, the search engine, the podcast-feed-loader is a scheduled serverless function, the proxy is in heroku, and the db is in elephantsql. Phew!

More on how to get this setup...later.

As for what settings are available to you, there are a bunch of env variables to know about. Everything works with the defaults, but these provide greater control and optional features. These are available for the site:

#### Website

```bash
REACT_APP_BASE_SEARCH_URL
REACT_APP_BASE_API_URL 

|

| 'http://localhost:3005/api/v1',
REACT_APP_CORS_PROXY 

|

| 'https://cors-anywhere.herokuapp.com/',
REACT_APP_MAX_SEARCH_RESULTS 

|

| 200,
REACT_APP_SEARCH_API_KEY 

|

| '18EA821D408444FCF3DC3EC4F3790FEC',
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

###### Spin docker containers
Go to desired folder.
```
# test docker enviroment bindings before creating containers
docker-compose config

# start local development
docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d

# start regular docker
docker-compose build && docker-compose up [ OPTIONAL ] -d (if console is not needed)

# to start specific service
docker-compose -f docker-compose.yml up -d website (or any other service name from docker-compose)
```

Command to stop container:

```;bash

# to stop containers
docker-compose stop
```

## How can I add a new podcast?

The search engine gets populated via a different github project, the [QIT Podcast Feed Loader](https://github.com/codingblocks/qit-podcast-feed-loader) project.

## Contributors
We now have a bot! If you are, or have, contributing to this project, please send a PR with @all-contributors please add @[your GitHub account name] for [type of contribution](https://github.com/all-contributors/all-contributors#emoji-key)


Huge thank you to everybody that has worked on this project!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/3766680?v=4" width="130px;" alt="Aaron Clawson"/><br /><sub><b>Aaron Clawson</b></sub>](https://github.com/MadVikingGod)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=MadVikingGod "Code") | [<img src="https://avatars1.githubusercontent.com/u/13472844?v=4" width="130px;" alt="Adam Lantz"/><br /><sub><b>Adam Lantz</b></sub>](http://adamlantz.com)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=AdamLantz "Code") | [<img src="https://avatars2.githubusercontent.com/u/31780340?v=4" width="130px;" alt="Aditya Kolla"/><br /><sub><b>Aditya Kolla</b></sub>](https://github.com/Aditya-Kolla)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=Aditya-Kolla "Code") | [<img src="https://avatars3.githubusercontent.com/u/25411099?v=4" width="130px;" alt="Arlene"/><br /><sub><b>Arlene</b></sub>](https://github.com/ArleneAndrews)<br />[📖](https://github.com/codingblocks/qit.cloud/commits?author=ArleneAndrews "Documentation") [⚠️](https://github.com/codingblocks/qit.cloud/commits?author=ArleneAndrews "Tests") [💻](https://github.com/codingblocks/qit.cloud/commits?author=ArleneAndrews "Code") | [<img src="https://avatars2.githubusercontent.com/u/24431037?v=4" width="130px;" alt="Artyom Emelyanenko"/><br /><sub><b>Artyom Emelyanenko</b></sub>](https://github.com/temaEmelyan)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=temaEmelyan "Code") | [<img src="https://avatars3.githubusercontent.com/u/26337310?v=4" width="130px;" alt="Ben Steward"/><br /><sub><b>Ben Steward</b></sub>](https://tehpsalmist.com)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=tehpsalmist "Code") |
| :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars3.githubusercontent.com/u/6699191?v=4" width="130px;" alt="Brandon Lyons"/><br /><sub><b>Brandon Lyons</b></sub>](https://github.com/lyonsbp)<br />[⚠️](https://github.com/codingblocks/qit.cloud/commits?author=lyonsbp "Tests") | [<img src="https://avatars2.githubusercontent.com/u/4571261?v=4" width="130px;" alt="Chris"/><br /><sub><b>Chris</b></sub>](https://github.com/Ju66ernaut)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=Ju66ernaut "Code") | [<img src="https://avatars0.githubusercontent.com/u/6683520?v=4" width="130px;" alt="Dave Follett"/><br /><sub><b>Dave Follett</b></sub>](https://davefollett.io)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=davefollett "Code") [🚇](#infra-davefollett "Infrastructure (Hosting, Build-Tools, etc)") [📖](https://github.com/codingblocks/qit.cloud/commits?author=davefollett "Documentation") [⚠️](https://github.com/codingblocks/qit.cloud/commits?author=davefollett "Tests") | [<img src="https://avatars0.githubusercontent.com/u/39040273?v=4" width="130px;" alt="Gary R Krause"/><br /><sub><b>Gary R Krause</b></sub>](http://garyray-k.github.io)<br />[📖](https://github.com/codingblocks/qit.cloud/commits?author=garyray-k "Documentation") [⚠️](https://github.com/codingblocks/qit.cloud/commits?author=garyray-k "Tests") [💻](https://github.com/codingblocks/qit.cloud/commits?author=garyray-k "Code") | [<img src="https://avatars0.githubusercontent.com/u/81006?v=4" width="130px;" alt="Joe Zack"/><br /><sub><b>Joe Zack</b></sub>](http://joezack.com)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=THEjoezack "Code") [🎨](#design-THEjoezack "Design") [🚇](#infra-THEjoezack "Infrastructure (Hosting, Build-Tools, etc)") [📖](https://github.com/codingblocks/qit.cloud/commits?author=THEjoezack "Documentation")| [<img src="https://avatars1.githubusercontent.com/u/6821650?v=4" width="130px;" alt="Joseph Dollahon"/><br /><sub><b>Joseph Dollahon</b></sub>](http://www.josephdollahon.com)<br />[📖](https://github.com/codingblocks/qit.cloud/commits?author=joseph-d-d "Documentation") |
| [<img src="https://avatars0.githubusercontent.com/u/1026046?v=4" width="130px;" alt="Mikkel Madsen"/><br /><sub><b>Mikkel Madsen</b></sub>](https://github.com/Madsn)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=Madsn "Code") [🚇](#infra-Madsn "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars3.githubusercontent.com/u/16916098?v=4" width="130px;" alt="Nicolas Marcora"/><br /><sub><b>Nicolas Marcora</b></sub>](https://github.com/MinimumViablePerson)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=MinimumViablePerson "Code") [⚠️](https://github.com/codingblocks/qit.cloud/commits?author=MinimumViablePerson "Tests") | [<img src="https://avatars1.githubusercontent.com/u/3075792?v=4" width="130px;" alt="Paul Mcilreavy"/><br /><sub><b>Paul Mcilreavy</b></sub>](https://github.com/pmcilreavy)<br />[💻](https://github.com/codingblocks/qit.cloud/commits?author=pmcilreavy "Code") | [<img src="https://avatars1.githubusercontent.com/u/8465237?v=4" width="130px;" alt="Sung Kim"/><br /><sub><b>Sung Kim</b></sub>](https://twitter.com/dance2die)<br />[📖](https://github.com/codingblocks/qit.cloud/commits?author=dance2die "Documentation") | [<img src="https://avatars0.githubusercontent.com/u/11421183?v=4" width="130px;" alt="Vladimir"/><br /><sub><b>Vladimir</b></sub>](https://github.com/vlado92)<br />[🚇](#infra-vlado92 "Infrastructure (Hosting, Build-Tools, etc)") [💻](https://github.com/codingblocks/qit.cloud/commits?author=vlado92 "Code") [📖](https://github.com/codingblocks/qit.cloud/commits?author=vlado92 "Documentation") |
<!-- ALL-CONTRIBUTORS-LIST:END -->
