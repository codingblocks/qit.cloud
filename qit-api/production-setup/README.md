# Production Setup

This directory contains the files currently used for hosting in production, minus the values in the .env file.

Setup is pretty wonky since we just got it working, but I wanted to go ahead and jot down the information while it was still fresh.

```bash
# requires docker, docker-compose
git clone https://github.com/codingblocks/podcast-app.git
# TODO Should probably do some slick symlinking here, or something
cp podcast-app/qit-api/production-setup/nginx-certbot .
cp podcast-app/qit-api/production-setup/* .
# Update the values in .env
./run.sh
```

TODO These files probably don't belong here, but I'm not sure where else to put them for the moment!

Note: this nginx-certbot was taken and modified from the wonderful [nginx-certbot](https://github.com/wmnnd/nginx-certbot). Thanks [Philipp](https://github.com/wmnnd)!