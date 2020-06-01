# source
FROM alpine/git:v2.24.3 as source

WORKDIR /app
RUN git clone https://github.com/codingblocks/SearchIndexer.git

# build
FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app
COPY --from=source /app/SearchIndexer .

RUN dotnet restore
RUN dotnet publish -c release -o /dist --no-restore

# runtime
FROM mcr.microsoft.com/dotnet/core/runtime:2.2
WORKDIR /app
COPY --from=build /dist .

COPY --from=source /app/SearchIndexer/Examples/elastic-podcast-index-definition.json /config/index.json
COPY --from=source /app/SearchIndexer/Examples/podcast-feeds.json /config/feeds.json

COPY init.sh .
RUN chmod +x init.sh
ENTRYPOINT ["/app/init.sh"]