FROM ruby:2.5.1

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /qit-api
WORKDIR /qit-api
COPY Gemfile /qit-api/Gemfile
COPY Gemfile.lock /qit-api/Gemfile.lock
RUN bundle install
COPY . /qit-api

EXPOSE 3005
