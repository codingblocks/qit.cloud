#!/bin/bash
password=QITROCKS!
url="http://es01:9200"
echo Initializing $url
dotnet App.dll create-index -e $url -n podcasts -f /config/index.json -u elastic -p $password
dotnet App.dll update-documents -f  /config/feeds.json -e $url -n podcasts -u elastic -p $password