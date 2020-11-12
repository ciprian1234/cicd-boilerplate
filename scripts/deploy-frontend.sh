#!/bin/bash

# create image for building react app
docker build -f frontend/build.dockerfile -t build-react-app ./frontend

# delete old website static assets
rm -rf ~/projects/nginx/websites/cicd-boilerplate/* 

# create cointainer copy build content and remove container
docker create --name dummy build-react-app
docker cp dummy:/frontend/build/. ~/projects/nginx/websites/cicd-boilerplate

# cleanup
docker rm -f dummy
#docker image rm build-react-app
