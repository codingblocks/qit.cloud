cd podcast-app/qit-api
git pull origin backend-docker # TODO This will have to change at some
docker build . -f dockerfile-ruby -t qit-api
docker stop $(docker ps -q --filter ancestor=qit-api )
docker system prune -f
cd ~/
docker-compose down
docker-compose up -d
