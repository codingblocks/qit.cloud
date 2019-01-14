# Running the back-end

Well, things are still a bit weird - but the easiest way to run the back end is to first start up docker-compose:

```bash
docker-compose up
```

Now the back end is running, though you still need to fire up the front-end to do anything. (cd ../website-react; npm start)

Also, if this is your first time running the db (or you commented out the persisted volume), you'll need to shell into the ruby service and run this:

```bash
rails db:migrate
```

If you want to blow away your data, you can just delete the tmp folder:

```bash
rm -rf tmp
```

Want to see what the data looks like? Check out pgadmin, if you're running locally the username and password are in the docker compose file.

----

## Want to run this in production?

Well then the docker-compose.yml isn't useful to you. You'll want to set the ruby app up, and set the appropriate environment variables (which you can see in the docker-compose file)

Here's a sample that we're using on linode right now:
```cd podcast-app/qit-api
git pull origin master
docker build . -f dockerfile-ruby -t qit-api
docker stop $(docker ps -q --filter ancestor=qit-api )
docker system prune -f
docker run --env-file ../../.env -d -p 3005:3005 qit-api bundle exec rails s -p 3005 -b '0.0.0.0'```

----

## Building the image for dockerhub

```bash
docker build . -f dockerfile-ruby -t qit-api:latest
docker tag qit-api:latest thejz/qit-api:latest
docker push thejz/qit-api:latest
```