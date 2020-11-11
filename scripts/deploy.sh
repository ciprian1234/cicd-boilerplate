#!/bin/bash

# stop nginx service and docker containers
docker-compose -f ~/projects/github/cicd-boilerplate/backend/docker-compose.yml down
sudo service nginx stop

## Clean
rm -rf ~/projects/github/cicd-boilerplate/build
rm -rf ~/projects/nginx/cicd-boilerplate
mkdir ~/projects/nginx/cicd-boilerplate

# Build the frontend
docker run --
