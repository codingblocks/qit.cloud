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